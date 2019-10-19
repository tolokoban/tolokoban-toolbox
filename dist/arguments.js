"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (process.argv.length < 3) {
    console.error("At least one arguments is needed: the path of the component to create.");
    process.exit(1);
}
var args = process.argv.slice(2);
exports.default = {
    files: args.filter(function (x) { return x.charAt(0) !== '-'; }),
    curDir: process.cwd()
};
