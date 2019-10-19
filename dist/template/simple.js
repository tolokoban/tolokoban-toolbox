"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FS = require('fs');
var text_1 = require("../text");
exports.default = (function (root, filename, className, backToRoot) {
    var name = text_1.default.capitalize(text_1.default.camelize(filename));
    return "import React from \"react\"\n\n" + (FS.existsSync(root + "types.ts") || FS.existsSync(root + "types.tsx") ?
        "import { * } from \"" + backToRoot + "/types\"\n" : '') + "import Button from \"" + backToRoot + "/tfw/view/button\"\n\nimport \"./" + filename + ".css\"\n\ninterface T" + name + "Props {}\ninterface T" + name + "State {}\n\nexport default class " + name + " extends React.Component<T" + name + "Props, T" + name + "State> {\n    constructor( props: T" + name + "Props ) {\n        super(props)\n        this.state = {}\n    }\n\n    render() {\n        const classes = ['" + className + "']\n\n        return (<div className={classes.join(' ')}>\n        </div>)\n    }\n}\n";
});
