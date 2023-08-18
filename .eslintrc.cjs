module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:tailwindcss/recommended",
    // "plugin:n/recommended-module",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "jsx-a11y", "simple-import-sort", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
  },
  rules: {
    // theses rules came from eslint-plugin-simple-import-sort example
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",

    // does not come with plugin:eslint-comments/recommended
    "eslint-comments/no-unused-disable": "error",
  },
};
