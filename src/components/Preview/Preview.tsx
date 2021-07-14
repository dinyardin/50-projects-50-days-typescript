import React from 'react'

interface Prop {
    project: any
}

function Preview(props: Prop) {
    return <div>{props.project}</div>
}

export default Preview
