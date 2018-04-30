var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: { 
            index: './src/js/index.js',
            gallery: './src/gallery.js',
            keldim: './src/keldim.js',
            about: './src/about.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        rules: [
            {
                test: /\.styl$/, 
                use: ['style-loader', 'css-loader', 'stylus-loader']
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
            excludeChunks: ['gallery', 'keldim', 'about'],
            template: 'src/index.pug',
        }),
        new HtmlWebpackPlugin({
            title: 'For Lera',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['gallery'],
            filename: 'gallery.html',
            template: 'src/gallery.pug',
        }),
        new HtmlWebpackPlugin({
            title: 'For Lera',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['keldim'],
            filename: 'keldim.html',
            template: 'src/keldim.pug',
        }),
        new HtmlWebpackPlugin({
            title: 'For Lera',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['about'],
            filename: 'about.html',
            template: 'src/about.pug',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          })
        ]
};