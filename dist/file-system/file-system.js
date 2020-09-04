"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FS = require('fs');
var Path = require('path');
exports.default = {
    basename: basename,
    exists: exists,
    findFileInParentFolders: findFileInParentFolders,
    isFile: isFile,
    isDirectory: isDirectory,
    loadPackageJsonFile: loadPackageJsonFile,
    relative: relative
};
function loadPackageJsonFile(fromDir) {
    var content = findFileInParentFolders("package.json", fromDir) || "{}";
    return JSON.parse(content);
}
function findFileInParentFolders(filename, fromDir) {
    var previousDir = "";
    var currentDir = fromDir;
    while (currentDir !== previousDir) {
        var curFilePath = Path.resolve(currentDir, filename);
        if (exists(curFilePath))
            return curFilePath;
        previousDir = currentDir;
        currentDir = Path.resolve(currentDir, "..");
    }
    return null;
}
function exists(path) {
    return FS.existsSync(path);
}
function isFile(path) {
    if (!exists(path))
        return false;
    var stat = FS.statSync(path);
    return stat.isFile();
}
function isDirectory(path) {
    if (!exists(path))
        return false;
    var stat = FS.statSync(path);
    return stat.isDirectory();
}
/**
 * Return the relative path that you have to follow to go
 * from `fromDir` to `toPath`.
 *
 * makeRelativeTo("/home/ironfist/src/view", "/home/ironfist/lib/common.ts")
 * === "../../lib/common.ts"
 */
function relative(fromDir, toPath) {
    if (!toPath || !fromDir)
        return null;
    return Path.relative(Path.resolve(fromDir), Path.resolve(toPath));
}
function basename(path) {
    return Path.basename(path);
}
