import React, { Component , Fragment  } from 'react';
//Fragment is same as Aux custom component (technically its the same)
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js] rendering...');
    // return (
    //     <div className={classes.Person} >
    //         <p onClick={this.props.click}>I'm {this.props.name} and am { this.props.age} years old! </p>
    //         <p>{this.props.children}</p>
    //         <input type="text" onChange={this.props.changed} value={this.props.name}/>
    //     </div>
    // )
  
    return (        
        <Aux>
            {/* <Fragment> */}
            {/* <AuthContext.Consumer> */}
                { this.context.authenticated ? <p>Autheticated</p> : <p>Please log in</p>
                }
            {/* </AuthContext.Consumer> */}
            {/* {this.props.isAuth ? <p>Autheticated</p> : <p>Please log in</p> } */}
            <p key="i1" onClick={this.props.click}>I'm {this.props.name} and am { this.props.age} years old! </p>
            <p key="i2">{this.props.children}</p>
            <input 
                key="i3" 
                //ref={(inputEl) => {this.inputElement = inputEl}}
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
            {/* </Fragment> */}
        </Aux>
    );
}
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person,classes.Person);