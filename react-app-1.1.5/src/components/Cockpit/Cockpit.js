import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);    

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // const timer = setTimeout(() => {
        //     alert('saved data from cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return ()  => {
            //clearTimeout(timer);
            console.log('[Cockpit.js] Cleanup work in UseEffect');
        };

    }, []); 

    useEffect(() => {
            console.log('[Cockpit.js] 2nd UseEffect');
            return() => {
                console.log('[Cockpit.js] Cleanup work in 2nd UseEffect');
            }
    });

    let assignedclasses = []; 
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.personsLength <=2) {
      assignedclasses.push(classes.red);
    }

    if(props.personsLength <=1) {
      assignedclasses.push(classes.bold);
    }

    return (

        <div className={classes.cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedclasses.join(' ')}> check this out</p>
            <button ref={toggleBtnRef}
            className={btnClass}
            onClick={props.clicked }>Toggle Persons</button>
            {/* <AuthContext.Consumer> */}
                <button onClick={authContext.login}>Log In</button> 
                
            {/* </AuthContext.Consumer> */}
        </div>
    );
}

export default React.memo(cockpit);