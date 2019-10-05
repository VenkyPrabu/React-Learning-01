import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

//create-react-app my-app --scripts-version 1.1.5

class App extends Component {
  constructor(props)
  {
    super(props);
    console.log('[App.js] Constructor')
  }



  state = {
    persons: [
      {id: '1', name: 'Venky', age:23},
      {id: '2', name: 'Prabu', age:2},
      {id: '3',name: 'Logan', age:3}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    //changeCounter: 0, use prev state function inside setState function to access previous state values (not this.state way)
    isAuthenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    if(nextProps.persons !== this.state.persons)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }


  switchNameHandler = (newName) => {
    //console.log('was clicked!');
    //this.state.persons[0].name = "Venky Prabu"
    this.setState({persons:[
      {name: newName, age:1},
      {name: 'Prabu', age:2},
      {name: 'Loganathan', age:3}
    ]
   })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {     
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;
    
    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); (both same)
    const persons = [...this.state.persons]; //spread operator
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  };

  loginHandler = () => {
    this.setState({isAuthenticated: true});
  };

  render() {
    console.log('[App.js] Render');
    let persons = null;
    if(this.state.showPersons){
      persons = <div>
                    <Persons 
                      persons={this.state.persons}
                      clicked={this.deletePersonHandler}
                      changed={this.nameChangedHandler}
                      isAuthenticated={this.state.isAuthenticated}/> 
                </div>       
    }

    let cockpit = null;

    if(this.state.showCockpit){
      cockpit = <div>
                      <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons} 
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler}
                        //login={this.loginHandler}
                        />
                </div>
    }

    return (
      // <WithClass classes={classes.App}>
      <Aux>
        <button onClick={() => { this.setState({showCockpit: !this.state.showCockpit})}}>Toggle Cockpit</button>
          <AuthContext.Provider value={{authenticated: this.state.isAuthenticated, login: this.loginHandler}}>
            {cockpit}
            {persons}  
          </AuthContext.Provider> 
        </Aux> 
      // </WithClass>

    );
  }
}

export default withClass(App, classes.App);



// function based component (stateful with hooks)
// //import React, { Component } from 'react';
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'
// //create-react-app my-app --scripts-version 1.1.5

// //class App extends Component {
// const app = props => {
//   const [ personState, setPersonsState] = useState({
//     persons: [
//         {name: 'Venky', age:1},
//         {name: 'Prabu', age:2},
//         {name: 'Logan', age:3}
//       ],
//     otherState: 'some other value',
//     swtichNameToggle: false
//   });


//   const [ someOtherState, setSomeOtherState] = useState('other state value');

//   console.log(personState, someOtherState);

// const switchNameHandler = () => {
//   //console.log('was clicked!');
//   //DON'T DO THIS: personState.persons[0].name = "Venky Prabu"
//   setPersonsState({persons:[
//     {name: 'Venky Prabu ', age:1},
//     {name: 'Prabu', age:2},
//     {name: 'Loganathan', age:3}
//   ],
//   otherState: personState.otherState,
//   swtichNameToggle: personState.swtichNameToggle

//  })
// };

//   // render() {
//     return (
//       <div className="App">
//         <h1>H1, I'm a React App</h1>

//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age ={personState.persons[0].age}/>
//         <Person name={personState.persons[1].name} age ={personState.persons[1].age}>My Hobbies:Coding</Person>
//         <Person name={personState.persons[2].name} age ={personState.persons[2].age}/>
//       </div>
//     );
//   //}
// }

// export default app;




