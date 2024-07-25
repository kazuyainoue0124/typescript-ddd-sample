module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // TypeScriptの場合に必要な設定
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};