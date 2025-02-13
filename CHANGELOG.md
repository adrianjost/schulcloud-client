# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Allowed Types of change: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`

## Unreleased

### Added
SC-4151 hint for user when login failes

### Fixed

### Changed

### Removed


## [23.1.2] - 2020-06-02

### Changed
- SC-4766 minor text changes for n21

## [23.1.0] - 2020-05-20

### Added

- SC-4250, SC-4135, SC-4252, loading new landing page content and theme from ghost. About page partly loaded from ghost. Login form removed from front page and replaced by button in navbar. Demo-Login removed from front page.

### Fixed

### Changed

### Security
- SC-4506 Secure User Route. Removed not used /users route from view team members. 

### Removed


## [23.0.0] - 2020-05-19

### Changed in 23.0.0

- SC-4392 add/edit link dialog in ckeditor could not be opened
- SC-4075 Teams creation by students logic was changed. New environment enumeration variable `STUDENT_TEAM_CREATION` 
with possible values `disabled`, `enabled`, `opt-in`, `opt-out` was introduced. The feature value is set by instance deployment. 
In case of `disabled`, `enabled` it is valid for all schools of the instance and cannot be changed by the admin. 
In case of `opt-in` and `opt-out` the feature should be enabled/disabled by the school admin.

### Fixed

- SC-4392 add/edit link dialog in ckeditor could not be opened

## [22.10.0] - 2020-05-11

### Security in 22.10.0
- SC-3990 generation of first login passwords

### Added in 22.10.0
- SC-3664 query toast-type and toast-message
- SC-3892 Task sorting on the course side
- SC-3757 the LDAP config page now contains a link to the docs
- SC-438 on logout button click localStorge will be deleted
- SC-3801 added generic filepicker url to ckeditor
- SC-4260 added sentry sampling
- SC-4064 allow for bulk download of ungraded homework files

### Changed in 22.10.0

- SC-3607 CSV import now suggests the new birthday field (sample file + image)
- SC-3607 the student/teacher import page now displays a warning for large imports
- updated airbnb linter from 13.1 to 14.1
- SC-3801 updated CKEDITOR to 4.14
- SC-3801 changes CKEDITOR theme to a more maintained one (n1theme)

### Fixed in 22.10.0

- SC-3945 Courses are now again unarchiveable


## [22.9.12] - 2020-05-06

### Changed in 22.9.12

- Moved the Cookie parameters into the configuration
- Cookie property sameSite changed from strict to none as default

## [22.9.8] - 2020-04-23

### Added in 22.9.8

- add support for API-Key

## [22.9.7] - 2020-04-21

### Added in 22.9.7

- part of frontpage now loading content from sc blog.

## [22.9.2] - 2020-04-09

### Changed in 22.9.2

- All team events load now.

## [22.9.1] - 2020-04-08

### Changed in 22.9.1

- SC-3951: frontpage of n21 now loading content from n21 blog

## [22.9.0] - 2020-04-08

### Changed in 22.9.0

- Security fixes, Update Handlebars from 4.5 to 4.7
- SC-3749 remove cookie domain
- use babel-eslint parser for eslint and updated liner rules for json
- SC-3719 Shared files are now determined more more cleverly

## [22.8.0]

### Fixed in 22.8.0

- SC-3732: edit button was not visible for course teachers except the author on the task detail page

## [22.7.2] - 2020-04-03

### Changed in 22.7.2

- SC-3900 update tsc email on community page

## [22.7.1] - 2020-04-02

### Added in 22.7.1

- This changelog has been added

### Changed in 22.7.1

- SC-3884 update community page text
- SC-3872: update dataprivacy text
- SC-3868 changed NBC contact details from `terhaseborg@n-21.de` to `nbc-support@netz-21.de`
- SC-3878 some styling and interaction improvements to homeworks and archived homeworks

### Fixed in 22.7.1

- SC-3785: link to course after course creation corrected
- SC-3732: edit button was not visible for course teachers except the author on the task detail page
- SC-3807: link "Methodenguide" in nbc addons
- provide more formats for PTSans font to be compatible with more browsers
