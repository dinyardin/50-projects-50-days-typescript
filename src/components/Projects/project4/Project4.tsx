import React from 'react'
import './Project4.css'

//TODO: active class is not being added need to fix it.
// also need to import fontawsome icon
export default function Project4() {
    const search: HTMLElement | null = document.querySelector('.search')
    const btn: HTMLElement | null = document.querySelector('.btn')
    const input: HTMLElement | null = document.querySelector('.input')

    btn?.addEventListener('click', () => {
        console.log(btn)
        console.log(search?.classList)
        search?.classList.toggle('active')
        ;(input as HTMLInputElement).focus()
    })

    return (
        <div className="search">
            <input
                type="text"
                className="input"
                placeholder="Search..."
            ></input>
            <button className="btn">
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}
