import React from 'react'
import Question from '../components/Question.js'
import { nanoid } from 'nanoid'

export default function GamePage() {
    const [questionsArray, setQuestionsArray] = React.useState([])
    const [check, setCheck] = React.useState(false)
    
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionsArray(data.results))
    }, [])
    
    function questionElements() {
        return (
            questionsArray.map(el => {
                return <Question
                        question={el.question}
                        answers={[el.correct_answer, ...el.incorrect_answers]}
                        correctAnswer={el.correct_answer}
                        check={check}
                        key={nanoid()}
                    />
            })
        )
    }

    function handleClick() {
        setCheck(true)
    }
    
    return (
        <div>
            {questionElements()}
            <hr />
            <button onClick={handleClick} >Check Answers</button>
        </div>
    )
}