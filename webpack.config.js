const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "logzone.js",
    library: {
      name: "logzone",
      type: "umd",
    },
  },
  externals: {
    lodash: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "_",
    },
  },
};
