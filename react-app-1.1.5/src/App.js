import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, { StyleRoot} from 'radium';
//create-react-app my-app --scripts-version 1.1.5

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Venky', age:1},
      {id: '2', name: 'Prabu', age:2},
      {id: '3',name: 'Logan', age:3}
    ],
    otherState: 'some other value',
    showPersons: false
  }

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
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
              <div>
                {this.state.persons.map((person,index) => {
                    return <Person 
                              click={() => this.deletePersonHandler(index)}
                              name={person.name} 
                              age={person.age}
                              key={person.id}
                              changed={(event) => this.nameChangedHandler(event,person.id)}
                              />
                })}
               
                </div>
             );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black'
      // }

    }

    let classes = []; 

    if(this.state.persons.length <=2) {
      classes.push('red');
    }

    if(this.state.persons.length <=1) {
      classes.push('bold');
    }

    return (

      <div className="App">
        <h1>H1, I'm a React App</h1>
        <p className={classes.join(' ')}> check this out</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler }>Toggle Persons</button>
          {persons}    
      </div>

    );
  }
}

export default App;



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




