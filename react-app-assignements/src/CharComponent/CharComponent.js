import React from 'react';

const CharComponent = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return (
        <div key={props.index} style={style} onClick={props.click}>
                {props.char}
        </div>

    )
}

export default CharComponent;