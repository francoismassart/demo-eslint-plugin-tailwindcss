module.exports = {
  root: true,
  extends: [
    "plugin:tailwindcss/recommended"
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
    {
      files: ['*.html', '*.blade.php'],
      parser: '@angular-eslint/template-parser',
    }
  ],
};