const { merge } = require('webpack-merge')
const common = require('./webpack.base.config')

module.exports = merge(common, {
    mode: 'production',
    externals: {
       'react': {
           commonjs: 'react',
           commonjs2: 'react',
           amd: 'react',
           root: 'React',
       },
       'react-dom': {
           commonjs: 'react-dom',
           commonjs2: 'react-dom',
           amd: 'react-dom',
           root: 'ReactDOM'
       },
       'plotly.js': {
            commonjs: 'plotly.js',
            commonjs2: 'plotly.js',
            amd: 'plotly.js',
            root: 'Plotly'
        },
        'react-plotly.js': {
            commonjs: 'react-plotly.js',
            commonjs2: 'react-plotly.js',
            amd: 'react-plotly.js',
            root: 'Plot'
        }
    },
    optimization: {
        splitChunks: { chunks: 'all' }
    }
})
