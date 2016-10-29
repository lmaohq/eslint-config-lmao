eslint-config-lmao
===
Our ESLint configuration, based upon Airbnb's one.

Install: `npm install --save-dev eslint-config-lmao`

###Rules that differ from [airbnb/javascript](http://github.com/airbnb/javascript):
 - There has to be one space after { and before } when declaring an object.
 - There has to be one space after a function name and before the ().
 - Console usage is allowed.
 - Semicolons are optional (when isn't present, shows a warning, not an error), but we recommend adding those.
 - Import/require extensions are open (not only .js files)
 - Trailing commas are not allowed.
 - All React PropTypes are allowed (set react/forbid-prop-types to 0)
