module.exports = function (config) {
    config.set({

        basePath: './',

        reporters: ['spec','progress', 'coverage', 'junit'],

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/components/**/*.js',
            'app/common/**/*.js',
            'app/profiles/web/**/*.js' // perform the tests for web only
        ],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/common/**/!(*_test).js': ['coverage'],
            'app/components/**/!(*_test).js': ['coverage'],
            'app/profiles/web/**/!(*_test).js': ['coverage']


        },

        autoWatch: false,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-junit-reporter',
            'karma-jasmine',
            'karma-coverage'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }
    });
};
