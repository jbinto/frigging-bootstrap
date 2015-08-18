ExtractTextPlugin = require "extract-text-webpack-plugin"
path = require "path"
webpack = require "webpack"

isProduction = process.env.FRIG_ENV == "production"
minify = process.env.FRIG_MIN == "minify"
minExt = if minify then ".min" else ""

unless isProduction
  console.log(
    "\nPlease use npm link and the Frig examples for debugging "+
    "Frigging Bootstrap."+
    "\n\nSee the Frig's HACKING.md for further details.\n"
  )
  process.exit()

plugins = [
  new ExtractTextPlugin("frigging-bootstrap#{minExt}.css")
]

plugins.unshift new webpack.optimize.UglifyJsPlugin(minimize: true) if minify


module.exports =
  entry: "./src/javascripts/index.js"
  devtool: undefined
  output:
    path: "dist"
    filename: "frigging-bootstrap#{minExt}.js"
    libraryTarget: "umd"
    library: "FriggingBootstrap"
  externals:
    "react": "React"
    "frig/higher_order_components/boolean": "Frig.higherOrderComponents.Boolean"
    "frig/components/input": "Frig.Input"
    "frig/util": "Frig.util"
    "frig/components/value_linked_select": "Frig.ValueLinkedSelect"
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
  plugins: plugins
