module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: 'airbnb',
  installedESLint: true,
  env: {
    browser: true,
    node: true,
    mocha: true,
    amd: true
  },
  rules: {
    'object-curly-spacing': 2,
    'space-before-function-paren': ['error', 'always'],
    'no-console': 0,
    'semi': 1,
    'import/extensions': 0,
    'comma-dangle': 0,
    'react/forbid-prop-types': 0
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ]
};
