module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'react-hooks', 'prettier', 'standard'],
  rules: {
    'react-native/no-raw-text': 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    semi: 0,
    'no-console': 1,
    'react/jsx-boolean-value': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'no-prototype-builtins': 0,
    'react/prop-types': [
      'error',
      {
        ignore: ['navigation'],
      },
    ],

    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 1,
    'react/no-unescaped-entities': 0,
    'react/display-name': 0,
  },
}
