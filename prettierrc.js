/** @type {import('prettier').Config} */
export const config = {
  arrowParens: "always",
  printWidth: 120,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 4,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
