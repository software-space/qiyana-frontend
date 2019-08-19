module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
    }],
    camelcase: 'off',
    'comma-dangle': ['error', 'always-multiline'], // https://github.com/eslint/eslint/issues/11310
  },

  settings: {
    'import/resolver': {
      'typescript': {},
    },
    'import/core-modules': [
      '@nuxt/config',
      'vue',
    ],
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
