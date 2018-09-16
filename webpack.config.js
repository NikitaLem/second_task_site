const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: { 
    'pages/main/main': './src/pages/main/main.js',
    'pages/gallery/gallery': './src/pages/gallery/gallery.js',
    'pages/keldim/keldim': './src/pages/keldim/keldim.js',
    'pages/about/about': './src/pages/about/about.js',
    'pages/members/members': './src/pages/members/members.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.styl$/, 
        use: ['style-loader', 'css-loader?url=false', 'stylus-loader']
      },
      {
        test: /\.pug$/,
        use: ['raw-loader', 'pug-html-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
        loader: "url-loader",
        query:{
          limit:'10000',
          name:'[name].[ext]',
          outputPath:'fonts/'
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader:"file-loader",
        options:{
          name:'[name].[ext]',
          outputPath:'images/'
        }
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options:{
          name:'[name].[ext]',
          outputPath:'audio/'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    compress: true,
    open: true,
    stats: "errors-only"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'For Lera',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      excludeChunks: ['gallery', 'keldim', 'about', 'members'],
      filename: 'pages/main/main.html',
      template: 'src/pages/main/main.pug',
      inject: false
      }),
    new HtmlWebpackPlugin({
      title: 'For Lera',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['gallery'],
      filename: 'pages/gallery/gallery.html',
      template: 'src/pages/gallery/gallery.pug',
      inject: false
    }),
    new HtmlWebpackPlugin({
      title: 'For Lera',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['keldim'],
      filename: 'pages/keldim/keldim.html',
      template: 'src/pages/keldim/keldim.pug',
      inject: false
    }),
    new HtmlWebpackPlugin({
      title: 'For Lera',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['about'],
      filename: 'pages/about/about.html',
      template: 'src/pages/about/about.pug',
      inject: false
    }),
    new HtmlWebpackPlugin({
      title: 'For Lera',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['members'],
      filename: 'pages/members/members.html',
      template: 'src/pages/members/members.pug',
      inject: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};