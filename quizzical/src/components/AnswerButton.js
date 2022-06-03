import React from 'react'
import { nanoid } from 'nanoid'


export default function AnswerButton(props) {
    const [buttonProps, setButtonProps] = React.useState(
        {
            value: props.value,
            selected: false
        }
    )

    return (
        <input 
            type='button'
            value={buttonProps.value}
            onClick={props.handleCLick}
            key={nanoid()}
        />
    )
}