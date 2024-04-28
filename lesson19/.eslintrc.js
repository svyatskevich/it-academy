module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
    },
    extends: [
        'airbnb-base',
        'plugin:wdio/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',

            },
        },
    ],
    rules: {
        'no-restricted-syntax': 0,
        'no-await-in-loop': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'consistent-return': 'off',
        'import/no-unresolved': 'error',
        'lines-between-class-members': 0,
        'import/prefer-default-export': 0,
        'class-methods-use-this': 0,
        'import/no-cycle': 0,
        'no-undef': 'off',
        'linebreak-style': [
            'off',
        ],
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: true,
            },
        ],
        indent: ['error', 4],
        'max-len': [
            'error',
            {
                code: 200,
            },
        ],
    },
    plugins: [
        'wdio',
        'mocha',
    ],
};
