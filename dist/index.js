"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FS = require("fs");
var Path = require("path");
var arguments_1 = require("./arguments");
var text_1 = require("./text");
var simple_1 = require("./template/simple");
for (var _i = 0, _a = arguments_1.default.files; _i < _a.length; _i++) {
    var file = _a[_i];
    var fullpath = Path.resolve(arguments_1.default.curDir, file);
    if (FS.existsSync(fullpath)) {
        console.error("This folder lready exist:");
        console.error(fullpath);
        continue;
    }
    var basename = Path.basename(fullpath);
    var dirname = Path.dirname(fullpath);
    if (!FS.existsSync(dirname)) {
        console.error("This folder does not exist:");
        console.error(dirname);
        continue;
    }
    FS.mkdirSync(fullpath);
    FS.writeFileSync(Path.resolve(fullpath, "index.ts"), "export { default } from './" + basename + "'");
    var _b = figureOutClassName(dirname, basename), root = _b.root, className = _b.className, backToRoot = _b.backToRoot;
    FS.writeFileSync(Path.resolve(fullpath, basename + ".css"), "div." + className + " {}");
    FS.writeFileSync(Path.resolve(fullpath, basename + ".json"), "{\n  \"en\": {\n    \"ok\": \"Ok\"\n  },\n  \"fr\": {\n    \"ok\": \"Valider\"\n  }");
    FS.writeFileSync(Path.resolve(fullpath, basename + ".tsx"), simple_1.default(root, removeExtension(basename), className, backToRoot));
}
function removeExtension(filename) {
    var lastIndexOfDot = filename.lastIndexOf('.');
    if (lastIndexOfDot === -1)
        return filename;
    return filename.substr(0, lastIndexOfDot);
}
function figureOutClassName(folder, name) {
    var path = folder.split('/');
    var pieces = [];
    while (true) {
        var base = path.pop();
        if (!base)
            break;
        if (base !== 'src') {
            pieces.unshift(base);
            continue;
        }
        break;
    }
    var result = pieces.map(text_1.default.camelize);
    result.push(text_1.default.capitalize(text_1.default.camelize(name)));
    return {
        root: path.join('/') + '/src/',
        className: result.join('-'),
        backToRoot: pieces.map(function () { return '..'; }).join('/') + '/..'
    };
}
