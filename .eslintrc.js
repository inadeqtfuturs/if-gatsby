module.exports = {
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "jsx-a11y/href-no-hash": ["off"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": ["off"],
    "react/forbid-prop-types": ["off"],
    "import/no-extraneous-dependencies": [
      "warn",
      {
        devDependencies: [
          ".storybook/**",
          "stories/**",
          "jest/**",
          "**/*.test.js"
        ]
      }
    ],
    "max-len": [
      "warn",
      {
        "code": 80,
        "tabWidth": 2,
        "comments": 80,
        "ignoreComments": false,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "alias": [
        ["@components", "./src/components"],
        ["@utils", "./src/utils"]
      ]
    }
  }
}
