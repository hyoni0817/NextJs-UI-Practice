module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': 1,
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'import/no-unresolved': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
