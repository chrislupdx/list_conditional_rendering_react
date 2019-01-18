import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age:25},
      { name: 'Manu', age: 29},
      { name: 'stephan', age: 22}
    ],
  otherState: 'something',
  showPersons: false
}

switchNameHandler = (newName) => {
  this.setState( {
    persons: [
      {name: newName, age: 90},
      {name: 'Manu', age: 88},
      {name: 'Stedfdsf', age: 12}
    ]
  })
}

nameChangeHandler = (event) => {
  this.setState( {
    persons: [
      { name: 'Max', age: 11},
      { name: event.targget.value, age: 1},
      { name: "steetet", age: 2}
    ]
  })
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
      <h1> AM react app </h1>
      <p> yeah paragraph text </p>
      <button
        style={style}
        onClick={this.togglePersonsHandler} >Switch Name</button>
        {
          this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!")}
              changed ={this.nameChangedHandler}>Ugh </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null
      }
    </div>
    );
  }
}

export default App;
