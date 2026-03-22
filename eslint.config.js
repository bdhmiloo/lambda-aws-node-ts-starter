const js = require( "@eslint/js");
const { defineConfig } = require("eslint/config");
const preferArrow = require( "eslint-plugin-prefer-arrow");
const prettierConfig = require( "eslint-config-prettier");
const prettierPlugin = require( "eslint-plugin-prettier");
const stylistic = require( "@stylistic/eslint-plugin");
const typescriptParser = require( "@typescript-eslint/parser");
const typescriptEslint = require( "@typescript-eslint/eslint-plugin");

module.exports = defineConfig([
  {
    // Applies to all files
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
      sourceType: "module",
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
      globals: {
        process: "readonly",
      }
    },
    plugins: {
      "prefer-arrow": preferArrow,
      "prettier": prettierPlugin,
      "@stylistic": stylistic,
    },
    rules: {
      "func-style": ["error", "expression"],
      "prefer-arrow/prefer-arrow-functions": "error",
      "prettier/prettier": "error", // Ensure Prettier formatting issues are reported as ESLint errors
      ...js.configs.recommended.rules,
      "no-undef": "warn",
      "no-unused-vars": "warn",
      ...stylistic.configs.recommended.rules, // Integrate Stylistic rules
      "@stylistic/quotes": "off",
      "@stylistic/semi": "off",
      "@stylistic/member-delimiter-style": "off",
      "@stylistic/brace-style" : "off",
      "@stylistic/operator-linebreak" : "off",
      "@stylistic/indent" : "off",
      "@stylistic/arrow-parens" : "off",
      "@stylistic/indent-binary-ops" : "off",
      "@stylistic/quote-props" : "off",
      ...prettierConfig.rules, // Integrate Prettier rules to disable conflicting ESLint rules
    },
    ignores: ["node_modules/**/*"],
  },
  {
    // Applies to files in src directory
    files: ["!src/tests/**/*"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...typescriptEslint.configs['recommended-requiring-type-checking'].rules,
    }
  }
]);
