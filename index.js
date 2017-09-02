module.exports = {
    // "parser": "babel-eslint",
    "extends": [
        "airbnb",
        // "plugin:react/recommended",
        // "prettier",
        // "prettier/react"
    ],
    // "plugins": [
    //     "react",
    //     "prettier"
    // ],
    "rules": {
        // "prettier/prettier": [
        //     "error",
        //     {
        //         "singleQuote": true,
        //         "semi": false,
        //         "trailingComma": "all",
        //         "bracketSpacing": true,
        //         "jsxBracketSameLine": true,
        //     }
        // ],
        //  缩进
        indent: [2, 2, {SwitchCase: 1}],
        //  函数分支
        "complexity": [2, 10],
        //  函数嵌套层数
        "max-depth": [2, 4],
        //  函数callback层数
        "max-nested-callbacks": [2, 3],
        //  函数参数个数
        "max-params": [2, 5],
        //  函数行数
        "max-statements": [2, 50],
        //  分号
        "semi": [2, "never"],
        // "import/no-unresolved": 0,
        // "import/extensions": 0,
    },
    "env": {
        "browser": true,
        "node": true
    }
}