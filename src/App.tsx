import React, { useState } from 'react'
import Preview from './components/Preview/Preview'
import './App.css'
import Carousel from './components/Carousel/Carousel'
import Left from './components/Carousel/Left'
import Right from './components/Carousel/Right'
import Project1 from './components/Projects/project1/Project1'
import Project2 from './components/Projects/project2/Project2'
import Project3 from './components/Projects/project3/Project3'
import Project4 from './components/Projects/project4/Project4'

function App() {
    const [projectNumber, setProjectNumber] = useState<number>(0)
    const [projects, setProjects] = useState<any[]>([
        <Project1 />,
        <Project2 />,
        <Project3 />,
        <Project4 />,
    ])

    const incrementProjectNumber = () => {
        setProjectNumber((prev) => prev + 1)
    }

    const decrementProjectNumber = () => {
        setProjectNumber((prev) => prev - 1)
    }

    return (
        <div>
            <Left decrementProjectNumber={decrementProjectNumber} />
            <Right incrementProjectNumber={incrementProjectNumber} />
            <Preview project={projects[projectNumber]} />
        </div>
    )
}

export default App
