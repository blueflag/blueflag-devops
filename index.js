module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
    },
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "strict": 0
    }
}
