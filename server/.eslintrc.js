module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    // TypeScript-specific rules
    // Disable the requirement of an explicit return type on functions
    "@typescript-eslint/explicit-function-return-type": "off",
    // Warn when `any` type is used
    "@typescript-eslint/no-explicit-any": "warn",
    // Warn when variables are defined but never used
    "@typescript-eslint/no-unused-vars": "error",

    // React-specific rules
    // Warn when JSX files don't have a .tsx extension
    "react/jsx-filename-extension": ["off", { "extensions": [".tsx"] }],
    // Disable prop-types as we use TypeScript for type checking
    "react/prop-types": "off",
    // Disable the requirement to import React when using JSX
    "react/react-in-jsx-scope": "off",

    // Best practices
    // Enforce strict equality (`===`)
    "eqeqeq": ["error", "always"],
    // Enforce curly braces for control flow statements
    "curly": "error",
    // Warn when console statements are used
    "no-console": "off",
    // Error when debugger statements are used
    "no-debugger": "error",
    // Disallow multiple empty lines
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    // Limit lines to 120 characters
    "max-len": ["error", {
      "code": 180,
      "ignoreComments": true,
      "ignoreUrls": true
    }],

    // Stylistic issues
    // Enforce semi-colons
    "semi": ["error", "always"],
    // Enforce double quotes
    "quotes": ["error", "double"],
    // Enforce a 2-space indent
    "indent": ["error", 2],

    // ES6+
    // Enforce `const` if variable is not reassigned
    "prefer-const": "error",
    // Disallow `var`
    "no-var": "error",

    // Enforces explicit any type for catch clauses that do not specify a type
    "@typescript-eslint/no-implicit-any-catch": "off",
    // Disallows the use of custom TypeScript modules and namespaces
    "@typescript-eslint/no-namespace": "error",
    // Disallows non-null assertions using the ! postfix operator
    "@typescript-eslint/no-non-null-assertion": "warn",
    // Disallows multiple spaces between inline JSX props
    "react/jsx-props-no-multi-spaces": "off",
    // Disallows duplicate props in JSX
    "react/jsx-no-duplicate-props": "off",
    // Enforces consistent spacing inside JSX curly braces
    "react/jsx-curly-spacing": ["off", { "when": "never" }],
    // Limits cyclomatic complexity
    "complexity": ["error", 10],
    // Requires `default` case in `switch` statements
    "default-case": "error",
    // Disallows the use of `eval()`
    "no-eval": "error",
    // Enforce camelcase naming convention
    "camelcase": "off",
    // Requires constructor names to begin with a capital letter
    "new-cap": "off",
    // Enforce consistent line break style (`"unix"` or `"windows"`)
    "linebreak-style": ["off", "unix"],
    // Requires parentheses around arrow function arguments
    "arrow-parens": ["error", "always"],
    // Requires using arrow functions for callbacks
    "prefer-arrow-callback": "error",
    // Suggest using spread operators instead of .apply()
    "prefer-spread": "error",
    // Disallows using a non-promise value in an async promise executor
    "no-async-promise-executor": "error",
    // Disallows assignments that can lead to race conditions due to usage of await or yield
    "require-atomic-updates": "error"
  }
};
