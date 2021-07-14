import React from 'react'
import './Preview.css'

interface Prop {
    project: any
}

function Preview(props: Prop) {
    return <div>{props.project}</div>
}

export default Preview
