module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "jsx-a11y", "simple-import-sort", "import"],
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: true,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    tsconfigRootDir: __dirname,
  },
  rules: {
    // theses rules came from eslint-plugin-simple-import-sort example
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
