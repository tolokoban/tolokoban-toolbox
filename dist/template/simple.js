"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FS = require('fs');
var text_1 = require("../text");
exports.default = (function (root, filename, className, backToRoot) {
    var name = text_1.default.capitalize(text_1.default.camelize(filename));
    return "import React from \"react\"\nimport Tfw from 'tfw'\n\n" + (FS.existsSync(root + "types.ts") || FS.existsSync(root + "types.tsx") ?
        "// import { ... } from \"" + backToRoot + "/types\"\n" : '') + "\n\nimport \"./" + filename + ".css\"\n\nconst Button = Tfw.View.Button\nconst _ = Tfw.Intl.make(require(\"./" + filename + ".json\"))\n\ninterface I" + name + "Props {\n    className?: string | string[]\n}\ninterface I" + name + "State {}\n\nexport default class " + name + " extends React.Component<I" + name + "Props, I" + name + "State> {\n    state = {}\n\n    render() {\n        const classes = [\n            '" + className + "',\n            ...Tfw.Converter.StringArray(this.props.className, [])\n        ]\n\n        return (<div className={classes.join(' ')}>\n            <Button label={_('ok')} />\n        </div>)\n    }\n}\n";
});
