const webpack = require("webpack");
const path = require("path");

const DEST = path.resolve(__dirname, "dist");
module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "[name].bundle.js",
    path: DEST,
    library: "DS",
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: "babel-loader"
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: "awesome-typescript-loader"
      }
    ]
  }
};
