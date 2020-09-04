const FS = require('fs')
const Path = require('path')

export default {
    basename,
    exists,
    findFileInParentFolders,
    isFile,
    isDirectory,
    loadPackageJsonFile,
    relative
}

function loadPackageJsonFile(fromDir: string): {} {
    const content = findFileInParentFolders("package.json", fromDir) || "{}"
    return JSON.parse(content)
}

function findFileInParentFolders(filename: string, fromDir: string): string | null {
    let previousDir = ""
    let currentDir = fromDir
    while (currentDir !== previousDir) {
        const curFilePath = Path.resolve(currentDir, filename)
        if (exists(curFilePath)) return curFilePath

        previousDir = currentDir
        currentDir = Path.resolve(currentDir, "..")
    }
    return null
}

function exists(path: string): boolean {
    return FS.existsSync(path)
}

function isFile(path: string): boolean {
    if (!exists(path)) return false
    const stat = FS.statSync(path)
    return stat.isFile()
}

function isDirectory(path: string): boolean {
    if (!exists(path)) return false
    const stat = FS.statSync(path)
    return stat.isDirectory()
}

/**
 * Return the relative path that you have to follow to go
 * from `fromDir` to `toPath`.
 *
 * makeRelativeTo("/home/ironfist/src/view", "/home/ironfist/lib/common.ts")
 * === "../../lib/common.ts"
 */
function relative(fromDir: string, toPath: string): string | null {
    if (!toPath || !fromDir) return null
    return Path.relative(Path.resolve(fromDir), Path.resolve(toPath))
}

function basename(path: string): string {
    return Path.basename(path)
}
