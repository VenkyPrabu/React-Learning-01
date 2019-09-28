import React from 'react';

const userOutput = (props) => {

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '1px',
        margin: '10px'
      };

        return (
                <div  style={style} >
                    <p>Username : {props.username}</p>
                    <p> is logged in !</p> 
                </div>
            )
};

export default userOutput;