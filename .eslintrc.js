module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "globals": {
      "objectAssign": true,
    },
    "env": {
      "browser": true
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/forbid-prop-types": 0,
      "no-console": [1, { allow: ["warn", "error", "log", "info"] }],
      "semi": ["error", "never"],
      "no-unused-vars": [1, { "vars": "all", "args": "after-used" }],
      "class-methods-use-this": [0, { "exceptMethods": ["foo"] }],
      "camelcase": [2, {properties: "never"}],
      "no-underscore-dangle": 0,
      "arrow-body-style": 0,
      "no-class-assign": 0,
      "no-control-regex": 0
    }
};
