module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['sonarjs'],
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-escape': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'no-empty-pattern': 'off',
    'max-len': 'off',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'vue/max-attributes-per-line': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-irregular-whitespace': 'off',
    'object-curly-newline': 'off',
    'vue/attributes-order': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
