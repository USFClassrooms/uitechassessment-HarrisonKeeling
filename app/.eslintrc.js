const path = require('path');

module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "airbnb"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "prefer-object-spread": "off",
    "jsx-a11y/media-has-caption": "off",
    "radix": "off",
    "react/destructuring-assignment": "off",
    "react/forbid-prop-types": "off",
    "react/no-children-prop": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [path.resolve(__dirname, 'src')]
      }
    }
  }
};
