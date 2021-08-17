module.exports = {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-jsx',
        [
            'import',
            {
                'libraryName': 'antd',
                'libraryDirectory': 'es',
                'style': 'css'
            }
        ],
        [
            'import',
            {
                'libraryName': '@ant-design/icons',
                'libraryDirectory': 'lib/icons',
                'camel2DashComponentName': false,
            },
            '@ant-design/icons',
        ],
    ]
}
