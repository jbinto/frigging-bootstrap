ExtractTextPlugin = require "extract-text-webpack-plugin"
path = require "path"
webpack = require "webpack"

isProduction = process.env.FRIG_ENV == "production"
minimize = process.env.FRIG_MIN == "minimize"

module.exports =
  entry: "./src/javascripts/index.js"
  devtool: if isProduction then "source-map" else "inline-source-map"
  output: if isProduction
    path: path.join(__dirname, "dist")
    filename: "[name]#{if minimize then ".min.js" else ".js"}"
    libraryTarget: "var"
    library: "[name]"
  externals: if isProduction
    "react": "React"
    "frig/higher_order_components/boolean": "Frig.higherOrderComponents.Boolean"
    "frig/components/input": "Frig.components.Input"
    "frig/util": "Frig.util"
    "frig/components/value_linked_select": "Frig.value_linked_select"
    # "whatwg-fetch/fetch.js": "fetch"
  resolve:
    root: [
      path.join(__dirname, "src", "javascripts")
      path.join(__dirname, "src", "stylesheets")
    ]
  module:
    loaders: [
      if isProduction
        test: /\.styl$/
        # loader: 'style-loader!css-loader!stylus-loader'
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!stylus-loader"
        )
      else
        test: /\.styl$/
        loader: "style-loader!css-loader!stylus-loader"
      {
        test: /\.coffee$/
        loader: "coffee"
      }
      {
        test: /\.jsx?$/
        exclude: /^(node_modules|dist|scripts)/
        loader: "babel?stage=0"
      }
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: "url-loader"
      }
    ]
  plugins: [
    new webpack.optimize.UglifyJsPlugin(minimize: minimize)
    new ExtractTextPlugin("frigging_bootstrap.min.css") if isProduction
  ]
