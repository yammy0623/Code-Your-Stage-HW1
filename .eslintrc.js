module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/jsx-no-useless-fragment": 0,
    "react/button-has-type": 0,
    "react/prop-types": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "no-unused-expressions": 0,
    "react/jsx-props-no-spreading": 0
  }
};
