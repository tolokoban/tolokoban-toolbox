import FS from '../../file-system'
import Text from '../../text'

interface IArgs {
    outputDir: string
}

export default function(opt: IArgs) {
    const args = opt
    const baseName = FS.basename(opt.outputDir)
    const viewName = Text.capitalize(Text.camelize(baseName))
    const typesModuleAbsPath = FS.findFileInParentFolders(
        "types.ts",
        args.outputDir
    )
    const typesModuleRelPath = typesModuleAbsPath ?
        FS.relative(args.outputDir, typesModuleAbsPath) :
        null

}
