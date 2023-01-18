# demo-eslint-plugin-tailwindcss

Demonstrating how `eslint-plugin-tailwindcss` can wortk with HTML files.

The trick is to user the `@angular-eslint/template-parser` which won't trip on the doctype declaration.

Make sure to look at [.eslintrc.js](./.eslintrc.js)...

## Demo

1. Clone this repo and check out this branch (`html-files`)
2. `npm i` inside the cloned repo's folder
3. `npm run lint` will just list the errors (based on the default config of Tailwind CSS)
4. `npm run lint:fix` will autofix what is fixable and list remaining errors
