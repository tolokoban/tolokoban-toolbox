const FS = require("fs")
const Path = require("path")

import Arguments from './arguments'
import Text from './text'
import SimpleTemplate from './template/simple'


for (const file of Arguments.files) {
    const fullpath = Path.resolve(Arguments.curDir, file)
    if (FS.existsSync(fullpath)) {
        console.error("This folder lready exist:")
        console.error(fullpath)
        continue
    }
    const basename = Path.basename(fullpath)
    const dirname = Path.dirname(fullpath)
    if (!FS.existsSync(dirname)) {
        console.error("This folder does not exist:")
        console.error(dirname)
        continue
    }

    FS.mkdirSync(fullpath)
    FS.writeFileSync(
        Path.resolve(fullpath, "index.ts"),
        `export { default } from './${basename}'`
    )

    const { root, className, backToRoot } = figureOutClassName(dirname, basename)
    FS.writeFileSync(
        Path.resolve(fullpath, `${basename}.css`),
        `div.${className} {}`
    )
    FS.writeFileSync(
        Path.resolve(fullpath, `${basename}.yaml`),
        `en:\n\tok: Ok\nfr:\n\tok: Valider\n`
    )
    FS.writeFileSync(
        Path.resolve(fullpath, `${basename}.tsx`),
        SimpleTemplate(root, removeExtension(basename), className, backToRoot)
    )

}


function removeExtension(filename: string): string {
    const lastIndexOfDot = filename.lastIndexOf('.')
    if (lastIndexOfDot === -1) return filename
    return filename.substr(0, lastIndexOfDot)
}

function figureOutClassName(folder: string, name: string) {
    const path = folder.split('/')
    const pieces: string[] = []

    while (true) {
        const base = path.pop()
        if (!base) break
        if (base !== 'src') {
            pieces.unshift(base)
            continue
        }
        break
    }

    const result = pieces.map(Text.camelize)
    result.push(Text.capitalize(Text.camelize(name)))
    return {
        root: path.join('/') + '/src/',
        className: result.join('-'),
        backToRoot: pieces.map(() => '..').join('/') + '/..'
    }
}
