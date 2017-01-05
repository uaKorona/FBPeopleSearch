const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.base');

const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
};

module.exports = merge(config, {

    entry: [
        './index.js'
        // the entry point of our app
    ],

    devtool: 'cheap-module-source-map',


    plugins: [
        new webpack.DefinePlugin(GLOBALS),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ],
});