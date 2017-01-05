const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.base');


const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify('development')
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = merge(config, {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './index.js',
        // the entry point of our app
    ],
    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/',
        // match the output `publicPath`

        port: 3000,

        clientLogLevel: 'error',

        stats: "errors-only",

        compress: true,
    },


    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.DefinePlugin(GLOBALS)
    ],
});