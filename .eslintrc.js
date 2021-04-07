module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: { ecmaVersion: 2020 },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],

    curly: 'off',
    'no-useless-constructor': 'warn',
    'class-methods-use-this': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [
      0,
      {
        commonjs: true,
        amd: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow:
          [
            '_id',
            '_key',
            '_isVue',
            '__get',
            '__typename',
          ],
      },
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'any',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': ['error', 'double'],
    'vue/order-in-components': 'error',
    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: true,
      objectsInObjects: true,
    }],
    'vue/object-curly-spacing': ['error', 'always', {
      arraysInObjects: true,
      objectsInObjects: true,
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, minProperties: 5 },
      ObjectPattern: { multiline: true, minProperties: 5 },
      ImportDeclaration: { multiline: true, minProperties: 5 },
      ExportDeclaration: { multiline: true, minProperties: 3 },
    }],
    'space-in-parens': ['error', 'never'],
    'arrow-parens': ['warn', 'as-needed'],
    'no-confusing-arrow': 'off',
    'no-param-reassign': 'off',
  },
};
