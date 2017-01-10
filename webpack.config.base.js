const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    // where looking for files from 'entry'
    context: resolve(__dirname, 'src'),

    output: {
        filename: 'bundle.js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },

    module: {

        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader?{rules:{"no-unused-vars": 1}}',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                ],
            },
        ],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            eslint: {
                emitError: true,
                emitWarning:true,
                failOnWarning: true,
                failOnError: true
            }
        })
    ]



};