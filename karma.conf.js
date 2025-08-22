module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-spec-reporter"),
      require("karma-coverage"),
    ],

    client: { clearContext: false },

    files: [
      { pattern: "./src/test.ts", watched: false },
      {
        pattern: "./src/assets/**/*",
        included: false,
        served: true,
        watched: false,
      },
    ],

    reporters: ["spec", "kjhtml", "coverage"],

    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false,
      failFast: false,
    },

    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/website"),
      subdir: ".",
      reporters: [
        { type: "html" }, // browsable HTML
        { type: "lcov" }, // for CI/CD tools
        { type: "text-summary" }, // prints summary in console
      ],
      check: {
        global: {
          statements: 99,
          branches: 99,
          functions: 99,
          lines: 99,
        },
      },
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    restartOnFileChange: false,
  });
};
