const webpackConfig = require("./webpack.config.js");
module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    reporters: ["progress", "html"],
    browsers: ["PhantomJS"],
    singleRun: true,
    preprocessors: {
      "src/tests.js": "webpack"
    },
    webpack: webpackConfig,
    files: ["src/tests.js"],
    htmlReporter: {
      outputDir: "tests_results"
    },
    plugins: [
      require("karma-webpack"),
      require("karma-phantomjs-launcher"),
      require("karma-jasmine"),
      require("karma-html-reporter")
    ]
  });
};
