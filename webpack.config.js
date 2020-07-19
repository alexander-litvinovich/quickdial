const path = require("path");
const GenerateJsonPlugin = require("generate-json-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WriteFileWebpackPlugin = require("write-file-webpack-plugin");

const manifestSettings = require("./manifestSettings.js");

if (!!process.env.NODE_ENV) {
  console.log(
    'Can\'t resume, because "NODE_ENV" not set — development or production'
  );
}

const fileExtensions = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "eot",
  "otf",
  "svg",
  "ttf",
  "woff",
  "woff2",
];

const devServer = {
  quiet: false,
  noInfo: false,
  publicPath: "/",
  contentBase: path.join(__dirname, "static"),
  historyApiFallback: true,
  host: "0.0.0.0",
  port: 8000,
  hot: true,
  serveIndex: true,
};

const config = {
  entry: {
    popup: path.join(__dirname, "src", "popup.jsx"),
    options: path.join(__dirname, "src", "options.jsx"),
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "static", "icons"),
        to: path.join(__dirname, "dist", "icons"),
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "static", "popup.html"),
      filename: "popup.html",
      chunks: ["popup"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "static", "options.html"),
      filename: "options.html",
      chunks: ["options"],
    }),

    new GenerateJsonPlugin("manifest.json", manifestSettings),

    new WriteFileWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-transform-react-jsx", { pragma: "h" }]],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader", "resolve-url-loader"],
      },
      {
        test: new RegExp(".(" + fileExtensions.join("|") + ")$"),
        loader: "file-loader?name=[name].[ext]",
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

if (process.env.NODE_ENV === "development") {
  config.devServer = devServer;

  config.mode = "development";
  config.devtool = "cheap-module-source-map";
} else {
  config.mode = "production";
}

module.exports = config;
