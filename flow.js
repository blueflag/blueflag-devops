module.exports = {
    "plugins": [
        "flowtype",
        "flow-vars"
    ],
    "rules": {
        "flow-vars/define-flow-type": 1,
        "flow-vars/use-flow-type": 1,
        "flowtype/require-parameter-type": 1,
        "flowtype/require-return-type": [
            1,
            "always",
            {
                "annotateUndefined": "never"
            }
        ],
        "flowtype/space-after-type-colon": [
            1,
            "always"
        ],
        "flowtype/space-before-type-colon": [
            1,
            "never"
        ],
        "flowtype/type-id-match": [
            1,
            "^([A-Z][a-z0-9]+)+Type$"
        ]
    }
}
