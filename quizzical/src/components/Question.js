import React from 'react'
import he from 'he'

export default function Question(props) {
    const [formData, setFormData] = React.useState(
        {
            correctAnswer: props.correctAnswer,
            answer: ''
        }
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                answer: event.target.value
            }
        })
    }

    function doChangeBcg(answer) {
        // console.log(`ANSWER: ${answer}`)
        // console.log(`SELECTED ANSWER: ${formData.answer}`)
        // console.log(`CORRECT ANSWER: ${formData.correctAnswer}`)
        if (answer === formData.correctAnswer) {
            return {backgroundColor: 'green'}
        } else if (formData.answer === answer && answer !== formData.correctAnswer) {
            return {backgroundColor: 'red'}
        } else {
            return {backgroundColor: 'transparent'}
        }
    }

    function displayAnswers() {
        if (!props.check) {
            return (
                props.answers.map(answer => (
                    <>
                        <input
                            type='radio'
                            value={he.decode(answer)}
                            id={answer}
                            name={props.question}
                            onChange={handleChange}
                            checked={formData.answer === he.decode(answer)}
                        />
                        <label htmlFor={answer}>{he.decode(answer)}</label>
                    </>
                ))
            )
        } else {
            return (
                props.answers.map(answer => (
                    <div style={doChangeBcg(answer)}>
                        <input 
                            type='radio'
                            value={he.decode(answer)}
                            id={answer}
                            name={props.question}
                            onChange={handleChange}
                            checked={formData.answer === he.decode(answer)}
                        />
                        <label htmlFor={answer}>{he.decode(answer)}</label>
                    </div>
                ))
            )
        }
    }

    return (
        <div>
            <h5>{he.decode(props.question)}</h5>
            <div className='radio-toolbar'>
                {displayAnswers()}
            </div>
        </div>
    )
}