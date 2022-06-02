import React from 'react'
import Question from '../components/Question.js'

export default function GamePage() {
    const [questionsArray, setQuestionsArray] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionsArray(data.results))
    }, [])
    
    function questionElements() {
        return (
            questionsArray.map(el => {
                return <Question question={el.question} answers={[el.correct_answer, ...el.incorrect_answers]} />
            })
        )
    }
    
    return (
        <div>
            {questionElements()}
        </div>
    )
}