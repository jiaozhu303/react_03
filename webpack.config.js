var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var libraryName = "sparrow";


var args = require('yargs').argv;
console.log(args);

var webpackPlugins = [
    new htmlWebpackPlugin({
        title: 'react 学习 03',
        template: path.resolve(__dirname, "./src/index.html")
    }),
    new openBrowserPlugin({
        url: 'http://localhost:8080'
    }),
    new webpack.BannerPlugin('作者：zhaodj\n日期：2017-03-06'),
    new extractTextWebpackPlugin("styles.css")
];

if (args.env === 'prod') {
    //压缩JS
    webpackPlugins.push(new uglifyJsPlugin({minimize: true, sourceMap: true, warnings: true}));
    //sparrow.min.js
    libraryName = libraryName + ".min"
}

var config = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./lib"),
        filename: libraryName + ".js",
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: 'cheap-source-map',
    resolve: {
        // root: path.join(__dirname, "./src"),
        extensions: ['.js', '.css', '.json', '.less']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }, {
            test: /\.css/,
            loader: extractTextWebpackPlugin.extract({fallback: 'style-loader', use: ['css-loader']}),
            include: path.resolve(__dirname, 'src')
        }],
    },
    devServer: {
        contentBase: 'lib',
        inline: true,
        port: 8080,
        stats: {
            colors: true
        }
    },
    plugins: webpackPlugins
};

module.exports = config;
