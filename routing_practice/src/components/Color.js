import React from 'react';

const Color = (props) => {
    let styling = {
        height:100,
        width:250,
        backgroundColor:props.bgc,
        color:props.fc
    }

    return (
        <p style={styling}>{props.word}</p>
    )
}

export default Color;