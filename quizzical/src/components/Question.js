import React from 'react'

export default function Question(props) {
    function displayAnswers() {
        return (
            props.answers.map(answer => <button dangerouslySetInnerHTML={{ __html: 'your Text here' }}></button>)
        )
    }

    return (
        <div>
            <h5>{props.question}</h5>
            {displayAnswers()}
        </div>
    )
}