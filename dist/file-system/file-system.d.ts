declare const _default: {
    basename: typeof basename;
    exists: typeof exists;
    findFileInParentFolders: typeof findFileInParentFolders;
    isFile: typeof isFile;
    isDirectory: typeof isDirectory;
    loadPackageJsonFile: typeof loadPackageJsonFile;
    relative: typeof relative;
};
export default _default;
declare function loadPackageJsonFile(fromDir: string): {};
declare function findFileInParentFolders(filename: string, fromDir: string): string | null;
declare function exists(path: string): boolean;
declare function isFile(path: string): boolean;
declare function isDirectory(path: string): boolean;
/**
 * Return the relative path that you have to follow to go
 * from `fromDir` to `toPath`.
 *
 * makeRelativeTo("/home/ironfist/src/view", "/home/ironfist/lib/common.ts")
 * === "../../lib/common.ts"
 */
declare function relative(fromDir: string, toPath: string): string | null;
declare function basename(path: string): string;
