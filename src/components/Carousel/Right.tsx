import React from 'react'
import './Right.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

interface Prop {
    incrementProjectNumber: () => void
}

function Right(props: Prop) {
    return (
        <div className="right" onClick={props.incrementProjectNumber}>
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
    )
}

export default Right
