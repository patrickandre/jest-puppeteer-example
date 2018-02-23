module.exports = {
	verbose: true,
	testRegex: '((\\.|/)(e2e))\\.jsx?$',
	globalSetup: './setup.js',
	globalTeardown: './teardown.js',
	testEnvironment: './puppeteer_environment.js',
	globals: {
		baseUrl: 'http://kotaku.localhost:9000',
		baseUrlKinja: 'http://kinja.localhost:9000',
		testPostPermalink: 'https://gawkerselenium.kinja.com/do-not-delete-me-1595779590',
		features: ['no3rdparty', 'nosocialscripts', 'geo_features=off'],
		width: 1024,
		height: 800,
		username: 'gawkerselenium',
		password: 'wmhwwoqttzlrlxlddmyu'
	}
};
