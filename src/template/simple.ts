const FS = require('fs')
import Text from '../text'


export default (root: string, filename: string, className: string, backToRoot: string) => {
    const name = Text.capitalize(Text.camelize(filename))

    return `import React from "react"
import Tfw from 'tfw'

${
    FS.existsSync(`${root}types.ts`) || FS.existsSync(`${root}types.tsx`) ?
    `import { * } from "${backToRoot}/types"\n` : ''
}

import "./${filename}.css"

const Button = Tfw.View.Button
const _ = Tfw.Intl.make(require("./${filename}.yaml"))

interface I${name}Props {}
interface I${name}State {}

export default class ${name} extends React.Component<I${name}Props, I${name}State> {
    constructor( props: T${name}Props ) {
        super(props)
        this.state = {}
    }

    render() {
        const classes = ['${className}']

        return (<div className={classes.join(' ')}>
        </div>)
    }
}
`
}
