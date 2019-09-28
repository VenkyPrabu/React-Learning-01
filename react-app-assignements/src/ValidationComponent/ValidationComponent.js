import React from 'react';

const ValidationComponent = (props) => {
    let validationMessage = 'Text ling enough!';

    if(props.length < 5) {
        validationMessage = "Text is too short!";
    }

    return (
      <div>        
          {validationMessage}
      </div>
    );
};

export default ValidationComponent;