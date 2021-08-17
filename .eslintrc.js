module.exports = {
    env: {
        browser: true,
        node: true,
        es2020: true,
    },
    plugins: ['react', 'prettier'],
    extends: [
        'plugin:prettier/recommended',
        'airbnb-base',
        'plugin:react/recommended'
    ],
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'ecmaFeatures': {
            jsx: true
        }
    },
    // config webpack already configed alias
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.base.config.js'
            }
        },
        'react': {
            version: '999.999.999'
        }
    },
    rules: {
        'semi': 0,
        'no-console': 0,
        'indent': [0, 4],
        'no-unused-vars': [
            0,
            {
                vars: 'all',
                args: 'after-used',
            },
        ],
        'prettier/prettier': 'off',
        'max-len': ['error', { 'code': 150, 'comments': 200 }],
        'quote-props': [0, 'always'],
        'comma-dangle': 0,
        'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }],
        'react/display-name': [0, { 'ignoreTranspilerName': true }],
        'react/prop-types': 0,
        'import/prefer-default-export': 'off',
        'linebreak-style': [0, 'error', 'windows']
    }
}
