module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended', // Accessibility linting
        'plugin:prettier/recommended', // Integrates Prettier
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    rules: {
        // Customize your rules here
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript or prefer not to use them
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
        ],
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the React version
        },
    },
}
