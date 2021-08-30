import './App.css';
import { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';


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
    const style = {
      backgroundColor: 'green',
      color: '#FFF',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: '#000'
      }
    }

    let persons = null;
    
    // Recommended way to conditional render
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index, person.id)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    };
    

    // let classes = ['red', 'bold'].join(' ');

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }
    


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}
          >Toggle Persons</button>

          { persons}
          
          </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
