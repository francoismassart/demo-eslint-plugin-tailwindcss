module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "tailwindcss",
  ],
  "rules": {
    "tailwindcss/classnames-order": 2,
    "tailwindcss/no-custom-classname": 2,
    "tailwindcss/no-contradicting-classname": 2,
  },
  "overrides": [
    {
      "files": ["*.html"],
      "parser": "@angular-eslint/template-parser",
      "rules": {
        "tailwindcss/classnames-order": 2,
        "tailwindcss/no-custom-classname": 2,
        "tailwindcss/no-contradicting-classname": 2,
      },
    },
  ],
};