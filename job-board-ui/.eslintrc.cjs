module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended','plugin:@typescript-eslint/recommended-requiring-type-checking'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project : './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  "rules" : {
    "no-unused-vars" : "off",
    "@typescript-eslint/no-unused-vars" : "off",
    "@typescript-eslint/no-unnecessary-type-assertion" : "warn",
    "@typescript-eslint/no-empty-function" : "warn",
    "@typescript-eslint/require-await" : "warn",
    "@typescript-eslint/no-unsafe-call" : "warn",
    "@typescript-eslint/no-unsafe-member-access" : "warn",
    "prefer-const" : "off",
    "@typescript-eslint/prefer-const" : "off",
    "@typescript-eslint/no-misused-promises" : "off",
    "@typescript-eslint/no-unsafe-assignment" : "off",
  },
}