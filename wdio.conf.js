exports.config = {
    specs: [
        './features/feature/*.feature'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://demoqa.com/elements',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 160000,
        ignoreUndefinedDefinitions: false
    },

    suites: {
        textBox: [
            './features/feature/text-box.feature'
        ],

        checkBox: [
            './features/feature/check-box.feature'
        ],

        radioButton: [
            './features/feature/radio-button.feature'
        ],

        webTables: [
            './features/feature/web-tables.feature'
        ],

        buttons: [
            './features/feature/buttons.feature'
        ],

        form: [
            './features/feature/practice-form.feature'
        ]
    }
}
