// protractor configuration
// An example configuration file.
exports.config = {
	// The address of a running selenium server.
	seleniumAddress: 'http://localhost:4444/wd/hub',

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'firefox'
	},

	// Spec patterns are relative to the current working directly when
	// protractor is called.
	specs: ['test/E2E/protractorTest_spec.js','test/E2E/protractorTest1_spec.js'],

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};