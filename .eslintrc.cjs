module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "simple-import-sort"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: ["*.cjs"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^\\u0000"], ["^node:"], ["^"], ["^\\."]],
      },
    ],
  },
};
