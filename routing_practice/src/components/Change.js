import React from 'react';

const Change = (props) => {
    let input = props.input;

    if (isNaN(input)) {
        return (
            <h3>The word is: {input}</h3>
        )
    } else {
        return (
            <h3>The number is: {input}</h3>
        )
    }
}

export default Change;