import React, { useEffect } from 'react'
import './Project1.css'

export default function Project1() {
    useEffect(() => {
        const panels: NodeListOf<Element> | null =
            document.querySelectorAll('.panel')

        panels.forEach((panel: Element) => {
            panel.addEventListener('click', () => {
                removeActiveClasses()
                panel.classList.add('active')
            })
        })

        const removeActiveClasses = () => {
            panels.forEach((panel: Element) => {
                panel.classList.remove('active')
            })
        }
    }, [])

    return (
        <div className="container">
            <div
                className="panel active"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
                }}
            >
                <h3>Explore the world</h3>
            </div>
            <div
                className="panel"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
                }}
            >
                <h3>Wild Forest</h3>
            </div>
            <div
                className="panel"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
                }}
            >
                <h3>Sunny Beach</h3>
            </div>
            <div
                className="panel"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
                }}
            >
                <h3>City on Winter</h3>
            </div>
            <div
                className="panel"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
                }}
            >
                <h3>Clouds over Mountains</h3>
            </div>
        </div>
    )
}