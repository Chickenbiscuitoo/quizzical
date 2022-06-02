import React from 'react'

export default function StartPage(props) {
    return (
        <div className='startpage-container'>
            <header className='startpage--header'>
                <h1>Quizzical</h1>
                <h5>Descriptionzos</h5>
            </header>
            <button className='startpage--button' onClick={props.handleClick}>Start Game</button>
        </div>
    )
}