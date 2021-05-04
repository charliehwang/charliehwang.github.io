var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx"],

  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },

  externals: {
    react: "React",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("app.css"),
  ],

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, use: ["awesome-typescript-loader"] },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, enforce: "pre", use: "source-map-loader" },
    ],
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
