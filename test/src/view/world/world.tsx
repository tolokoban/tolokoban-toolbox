import React from "react"

import { * } from "../../types"
import Button from "../../tfw/view/button"

import "./world.css"

interface TWorldProps {}
interface TWorldState {}

export default class World extends React.Component<TWorldProps, TWorldState> {
    constructor( props: TWorldProps ) {
        super(props)
        this.state = {}
    }

    render() {
        const classes = ['view-World']

        return (<div className={classes.join(' ')}>
        </div>)
    }
}
