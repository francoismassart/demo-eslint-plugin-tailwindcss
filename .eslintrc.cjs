module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: ['tailwindcss'],
  extends: ['plugin:tailwindcss/recommended'],
  overrides: [
    {
      files: ['*.blade.php'],
      parser: require.resolve("@angular-eslint/template-parser"),
    }
  ],
};
