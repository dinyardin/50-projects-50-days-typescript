import React, { useState } from 'react'
import './Carousel.css'
import Preview from '../Preview/Preview'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Project1 from '../Projects/project1/Project1'
import Project2 from '../Projects/project2/Project2'

function Carousel() {
    const [projectNumber, setProjectNumber] = useState<number>(0)
    const [projects, setProjects] = useState<any[]>([
        <Project1 />,
        <Project2 />,
    ])

    const incrementProjectNumber = () => {
        setProjectNumber((prev) => prev + 1)
    }

    const decrementProjectNumber = () => {
        setProjectNumber((prev) => prev - 1)
    }

    return (
        <div className="carousel">
            <div className="carouselInner">
                <div className="left" onClick={incrementProjectNumber}>
                    <ArrowBackIosIcon style={{ fontSize: 30 }} />
                </div>
                <div className="center">
                    <Preview project={projects[projectNumber]} />
                </div>
                <div className="right" onClick={decrementProjectNumber}>
                    <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                </div>
            </div>
        </div>
    )
}

export default Carousel
