const path = require("path");

module.exports = {
  entry: "./src/client/index.tsx",
  output: {
    filename: "js/client.js",
    path: path.resolve(__dirname, 'dist/client'),
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
  }
}
