const FS = require('fs')
import Text from '../text'


export default (root: string, filename: string, className: string, backToRoot: string) => {
    const name = Text.capitalize(Text.camelize(filename))

    return `import React from "react"

${
    FS.existsSync(`${root}types.ts`) || FS.existsSync(`${root}types.tsx`) ?
    `import { * } from "${backToRoot}/types"\n` : ''
}import Button from "${backToRoot}/tfw/view/button"
import Intl from "${backToRoot}/tfw/intl"

import "./${filename}.css"

const _ = Intl.make(require("./${filename}.yaml"))

interface T${name}Props {}
interface T${name}State {}

export default class ${name} extends React.Component<T${name}Props, T${name}State> {
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
