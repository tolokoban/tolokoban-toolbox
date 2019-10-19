if (process.argv.length < 3) {
    console.error("At least one arguments is needed: the path of the component to create.")
    process.exit(1)
}

const args = process.argv.slice(2)

export default {
    files: args.filter(x => x.charAt(0) !== '-'),
    curDir: process.cwd()
}
