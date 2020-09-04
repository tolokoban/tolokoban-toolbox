"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_system_1 = require("../../file-system");
var text_1 = require("../../text");
function default_1(opt) {
    var args = opt;
    var baseName = file_system_1.default.basename(opt.outputDir);
    var viewName = text_1.default.capitalize(text_1.default.camelize(baseName));
    var typesModuleAbsPath = file_system_1.default.findFileInParentFolders("types.ts", args.outputDir);
    var typesModuleRelPath = typesModuleAbsPath ?
        file_system_1.default.relative(args.outputDir, typesModuleAbsPath) :
        null;
}
exports.default = default_1;
