module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],

  plugins: ["@typescript-eslint", "import", "prettier"],

  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    indent: "off", // Prettier is doing the indentation, this otherwise can conflict
    quotes: [0, "double"],
    semi: [0, "always"],
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/explicit-function-return-type": process.env.NODE_ENV === "production" ? "off" : "warn",
    "import/named": process.env.NODE_ENV === "production" ? "error" : "warn",
    "@typescript-eslint/no-explicit-any": process.env.NODE_ENV === "production" ? "off" : "warn",
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src/"]],
        extensions: [".ts", ".js", ".vue"],
      },
    },
  },
};
