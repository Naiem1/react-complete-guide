import './App.css';
import { Component } from 'react';
import Person from './Person/Person';


class App extends Component {
  
  state = {
    persons: [
      { name: 'Harry Porter', age: 100 },
      { name: 'Tony Stark', age: 200 },
      { name: 'Pitter Parker', age: 300 }
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangeHandler = (e) => {
    this.setState({
      persons: [
      { name: 'Loki', age: 100 },
      { name: e.target.value , age: 200 },
      { name: 'Pitter Parker', age: 800 }
        
      ] 
    })
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  };


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
              click={() => this.deletePersonHandler(index)}
              changed={this.nameChangeHandler}
            />
          })}
        </div>
      );
    };
    
    console.log(persons);

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}
        >Toggle Persons</button>

        { persons}
        
      </div>
    );
  }
}

export default App;
