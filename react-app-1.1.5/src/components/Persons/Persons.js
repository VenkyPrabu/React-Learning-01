import React, { PureComponent } from 'react';
import Person from './Person/Person';

//class Persons extends Component {
class Persons extends PureComponent {

// static getDerivedStateFromProps(props,state){
//     console.log('[Persons.js] getDerivedStateFromProps', props);
//     return state;
// }

// componentWillReceiveProps(props){
//     console.log('[Persons.js] componentWillReceiveProps', props);
// }

// shouldComponentUpdate(nextProps,nextState){  --NOT Required if we use PureComponent to check if the props changed 
//     console.log('[Persons.js] shouldComponentUpdate', nextState);
//     if(nextProps.persons !== this.props.persons){
//         return true;
//     }
//     return false;
// }

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate', prevState);
    return prevProps;
}

componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
}

componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
}

render(){
    console.log('[Persons.js] Rendering..');
    return this.props.persons.map((person,index) => {
   
        return (
                 <Person 
                   click={() => this.props.clicked(index)}
                   name={person.name} 
                   age={person.age}
                   key={person.id}
                   changed={(event) => this.props.changed(event,person.id)}
                   //isAuth={this.props.isAuthenticated}
                   />
        );
   });
}
};

export default Persons;

