import React from 'react'
import he from 'he'
import AnswerButton from './AnswerButton'

export default function Question(props) {
    function handleClick() {
        console.log('c')
    }

    function displayAnswers() {
        return (
            props.answers.map(answer => <AnswerButton 
                    value={he.decode(answer)} handleClick={handleClick} correctAnswer={he.decode(props.correctAnswer)}
                />)
        )
    }

    return (
        <div>
            <h5>{he.decode(props.question)}</h5>
            {displayAnswers()}
        </div>
    )
}