const { merge } = require('webpack-merge')
const common = require('./webpack.base.config')

module.exports = merge(common, {
    mode: 'development', // automatically configures DefinePlugin
    entry: './test/index.js',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3001,
        hot: true,
        compress: true, // gzip compress
    },
})
