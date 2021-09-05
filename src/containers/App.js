import { Component } from 'react';
import Cockpit from '../components/Cockpit.js/Cockpit';
import Persons from '../components/Perosns';
import Person from '../components/Persons/Person/Person';
import classes from './App.module.css';


class App extends Component {
  
  state = {
    persons: [
      { id: 1, name: 'Harry Porter', age: 100 },
      { id: 2, name: 'Tony Stark', age: 200 },
      { id: 3, name: 'Pitter Parker', age: 300 }
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log('personIndex>>',personIndex);
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons); // old method to copy object

    person.name = e.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

  };

  deletePersonHandler = (personIndex, id) => {
    // A good practice is to create a copy of your state array before manipulating state
    // create a copy -> change that -> update the state
    // const persons = this.state.persons.slice(); // copy person array 
    const persons = [...this.state.persons]; // modern way to copy array
    // persons.splice(personIndex, 1);
    // this.setState({ persons: persons });

    const person = persons.filter(p => p.id !== id);
    this.setState({
      persons: person
    })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  };


  render() {
    // const btnClass = [classes.Button];

    let persons = null;
    
    // Recommended way to conditional render
    if (this.state.showPersons) {
      // one component
      persons = <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={ this.nameChangeHandler}
          />

    //  btnClass.push(classes.Red)
    };
    

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersonHandler={this.togglePersonHandler}
          title={this.props.appTitle}
        />

        { persons}
        
      </div>
    );
  }
}

export default App;
