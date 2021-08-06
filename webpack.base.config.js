const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: 'bundle.[contenthash:8].js',
        filename: 'bundle.[name].js',
        library: {
            name: 'ReactPlotLegend',
            type: 'umd'
        },
        clean: true // the same effect as clean-webpack-plugin
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'src': path.resolve(__dirname, './src'),
            'test': path.resolve(__dirname, './test')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            // inject: 'body',
            // scriptLoading: 'blocking'
        })
    ],
    optimization: {
        splitChunks: { chunks: "all" }
    }
}