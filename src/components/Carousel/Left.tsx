import React from 'react'
import './Left.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
interface Prop {
    decrementProjectNumber: () => void
}

export default function Left(props: Prop) {
    return (
        <div className="left" onClick={props.decrementProjectNumber}>
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
    )
}
