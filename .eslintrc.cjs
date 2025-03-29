module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "react-refresh"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "always", children: "ignore" }
    ],
    "no-tabs": 0,
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_" }
    ],
    "react/jsx-key": ["error"],
    "react/jsx-boolean-value": ["error", "always"],
    semi: ["error", "never"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "@typescript-eslint/consistent-type-imports": "error"
  }
}
