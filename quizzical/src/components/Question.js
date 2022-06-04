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

        console.log(formData)
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