/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["vue"],
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "vue/no-multi-spaces": 1,
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "brace-style": [
      2,
      "stroustrup",
      {
        allowSingleLine: true,
      },
    ],
    "vue/max-attributes-per-line": 1,

    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,

    "@typescript-eslint/no-unused-vars": "off",
    "import/first": "off",
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
  },
};
("");
