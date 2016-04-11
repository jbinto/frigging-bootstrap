const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const isProduction = process.env.FRIG_ENV === 'production'
const minify = process.env.FRIG_MIN === 'minify'
const minExt = minify ? '.min' : ''

if (!isProduction) {
  const message = '\nPlease use npm link and the Frig examples for debugging ' +
    'Frigging Bootstrap.' +
    '\n\nSee the Frig\'s HACKING.md for further details.\n'
  console.log(message) // eslint-disable-line no-console
  process.exit()
}

const plugins = [new ExtractTextPlugin(`frigging-bootstrap${minExt}.css`)]

if (minify) {
  plugins.unshift(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
  }))
}

module.exports = {
  entry: './src/javascripts/index.js',
  output: {
    path: 'dist',
    filename: `frigging-bootstrap${minExt}.js`,
    libraryTarget: 'umd',
    library: 'FriggingBootstrap',
  },
  externals: {
    react: {
      root: 'React',
      this: 'React',
      var: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      this: 'ReactDOM',
      var: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
    },
    frig: {
      root: 'Frig',
      this: 'Frig',
      var: 'Frig',
      commonjs: 'frig',
      commonjs2: 'frig',
      amd: 'frig',
    },
    'react-addons-css-transition-group': {
      root: 'React.addons.CSSTransitionGroup',
      this: 'React.addons.CSSTransitionGroup',
      var: 'React.addons.CSSTransitionGroup',
      commonjs: 'react-addons-css-transition-group',
      commonjs2: 'react-addons-css-transition-group',
      amd: 'react-addons-css-transition-group',
    },
  },
  resolve: {
    root: [path.join(__dirname, 'src', 'javascripts'), path.join(__dirname, 'src', 'stylesheets')],
  },
  module: {
    loaders: [
      isProduction ? {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader'),
      } : {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      }, {
        test: /\.jsx?$/,
        exclude: /^(node_modules|dist|scripts)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-1'],
          plugins: ['babel-plugin-transform-decorators-legacy'],
        },
      }, {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader',
      },
    ],
  },
  plugins,
}
