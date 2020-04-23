const express = require('express');
const request = require('request');
const logger = require('../helpers/logger');
const { FEATURE_INSIGHTS_ENABLED, INSIGHTS_COLLECTOR_URI } = require('../config/global');


const router = express.Router();

router.use(require('../helpers/authentication').authChecker);

/**
 * replaces id occurences of given url.
 * may result in false positives if url slugs have a length of 24 characters
 * @param {string} url
 */
function idCleanup(url) {
	const match = /\/[0-9a-f]{24}/g;
	if (url.match(match)) {
		return url.replace(match, '/ID');
	}
	return url;
}

// removes query string and anchor from url
function getPathFromUrl(url) {
	return url.split(/[?#]/)[0];
}

router.post('/', (req, res, next) => {
	const data = req.body;
	const { context } = data.attributes;
	data.attributes.url = getPathFromUrl(idCleanup(data.attributes.url));
	const xApi = {
		actor: {
			account: {
				id: res.locals.currentUser._id,
				school_id: res.locals.currentSchool,
				roles: res.locals.currentUser.roles.map(r => r.name),
			},
			objectType: 'Agent',
		},
		verb: {
			id: 'http://id.tincanapi.com/verb/viewed',
			display: {
				'en-US': 'viewed',
			},
		},
		object: {
			id: data.attributes.url,
			objectType: 'Activity',
		},
		context: {
			contextActivities: {
				'queue-time': data.attributes.qt, // queue time (integer)

				'first-paint': context['first-paint'], // cm1 is first paint ms
				'time-to-interactive': context['time-to-interactive'], // cm2 is time to interactive ms
				'page-loaded': context['page-loaded'], // page load time ms
				'dom-interactive-time': context['dom-interactive-time'], // dom interactive time ms
				'dom-content-loaded': context['dom-content-loaded'], // content load time ms
				downlink: context.downlink, // download speed in mbit/s
				'request-start': context['request-start'],
				'response-start': context['response-start'],
				'response-end': context['response-end'],

				connection: context.connection, // connection type http://wicg.github.io/netinfo/
				localhost: data.attributes.url.includes('localhost'),
				networkProtocol: context.networkProtocol, // http1.1 / http2 / unknown
			},
		},
	};
	if (FEATURE_INSIGHTS_ENABLED === 'true' && INSIGHTS_COLLECTOR_URI) {
		request.post(`${INSIGHTS_COLLECTOR_URI}/insights`, {
			json: xApi,
		}, (error, response) => {
			if (error) {
				logger.error('Error while communicating with Insights', error);
				return res.sendStatus(500);
			}
			return res.sendStatus(200);
		});
	} else {
		return res.sendStatus(204);
	}
});

module.exports = router;
