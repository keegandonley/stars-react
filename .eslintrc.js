module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
	  "indent": ["error", "tab"],
	  "no-tabs": 0,
	  "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
	  "react/jsx-indent": ["error", "tab"],
	  "react/prop-types": 0,
	  "react/jsx-props-no-spreading": 0,
	  "react/jsx-indent-props": ["error", "tab"],
	  "react/jsx-indent-props": ["error", "tab"],
  },
};
