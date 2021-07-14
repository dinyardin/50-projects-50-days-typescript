import React from 'react'
import { useState } from 'react'
import Project1 from '../Projects/project1/Project1'
import Project2 from '../Projects/project2/Project2'

function Preview() {
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
        <div>
            {projects[projectNumber]}
            <button onClick={incrementProjectNumber}>Next</button>
            <button onClick={decrementProjectNumber}>Back</button>
        </div>
    )
}

export default Preview
