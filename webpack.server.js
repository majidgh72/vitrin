const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  entry: "./src/server/index.ts",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, 'dist/server'),
    clean: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
    },
    alias: {
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",

      client: path.resolve(__dirname, 'src/client/')
    },
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        loader: "ts-loader"
      }
    ]
  },
  externals: [nodeExternals()]
}
