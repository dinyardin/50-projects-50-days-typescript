import React, { useEffect } from 'react'
import './Project2.css'

export default function Project2() {
    useEffect(() => {
        const progress: HTMLElement | null = document.getElementById('progress')
        const prev: HTMLElement | null = document.getElementById('prev')
        const next: HTMLElement | null = document.getElementById('next')
        const circles: NodeListOf<Element> | null =
            document.querySelectorAll('.circle')

        let currentActive = 1

        next?.addEventListener('click', () => {
            currentActive++

            if (currentActive > circles.length) {
                currentActive = circles.length
            }

            update()
        })

        prev?.addEventListener('click', () => {
            currentActive--

            if (currentActive < 1) {
                currentActive = 1
            }

            update()
        })

        const update = () => {
            circles.forEach((circle: Element, index: number) => {
                if (index < currentActive) {
                    circle.classList.add('active')
                } else {
                    circle.classList.remove('active')
                }
            })

            const actives: NodeListOf<Element> | null =
                document.querySelectorAll('.active')
            if (progress) {
                progress.style.width =
                    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
            }

            if (currentActive === 1 && prev) {
                ;(prev as HTMLButtonElement).disabled = true
            } else if (currentActive === circles.length && next) {
                ;(next as HTMLButtonElement).disabled = true
            } else if (prev && next) {
                ;(prev as HTMLButtonElement).disabled = false
                ;(next as HTMLButtonElement).disabled = false
            }
        }
    }, [])

    return (
        <div className="container">
            <div className="progress-container">
                <div className="progress" id="progress"></div>
                <div className="circle active">1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>
                <div className="circle">4</div>
            </div>

            <button className="btn" id="prev" disabled>
                Prev
            </button>
            <button className="btn" id="next">
                Next
            </button>
        </div>
    )
}
