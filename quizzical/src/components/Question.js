import React from 'react'
import he from 'he'
import AnswerButton from './AnswerButton'

export default function Question(props) {
    const [selectedAnswer, setSelectedAnswer] = React.useState('')

    function handleCLick(answer) {
        setSelectedAnswer(answer)
    }

    function displayAnswers() {
        return (
            props.answers.map(answer => <AnswerButton value={he.decode(answer)} handleCLick={handleCLick} />)
        )
    }

    function correct(answer) {

    }

    function incorrect(answer) {

    }

    function checkAnswer() {
        selectedAnswer === props.correctAnswer ? incorrect(selectedAnswer) : correct(selectedAnswer)
    }

    return (
        <div>
            <h5>{he.decode(props.question)}</h5>
            {displayAnswers()}
        </div>
    )
}