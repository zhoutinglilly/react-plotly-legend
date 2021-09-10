const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESlintPlugin = require('eslint-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: 'bundle.[contenthash:8].js',
        filename: 'react-plotly-legend.js',
        library: {
            name: 'ReactPlotLegend',
            type: 'umd',
        },
        clean: true, // the same effect as clean-webpack-plugin
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css|less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.less'],
        alias: {
            src: path.resolve(__dirname, './src'),
            test: path.resolve(__dirname, './test'),
        },
        fallback: {
            assert: require.resolve('assert'),
            buffer: require.resolve('buffer'),
            stream: require.resolve('stream-browserify'),
            crypto: require.resolve('crypto-browserify'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            // inject: 'body',
            // scriptLoading: 'blocking'
        }),
        new ESlintPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
}
