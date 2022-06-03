import React from 'react'
import { nanoid } from 'nanoid'


export default function AnswerButton(props) {
    const [buttonSpecs, setButtonSpecs] = React.useState(
        {
            value: props.value,
            selected: false
        }
    )

    function handleClick() {
        setButtonSpecs(prevButtonSpecs => {
            return {
                ...prevButtonSpecs,
                selected: !prevButtonSpecs.selected
            }
        })
    }
    
    const selectedStyles = {
        backgroundColor: '#D6DBF5'
    }
    
    const normalStyles = {
        backgroundColor: 'white'
    }

    return (
        <input 
            type='button'
            value={buttonSpecs.value}
            onClick={handleClick}
            key={nanoid()}
            style={ buttonSpecs.selected ? selectedStyles : normalStyles}
        />
    )
}