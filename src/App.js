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
    otherState: 'some other value'
  }

  switchNameHandler = newName => {
    console.log('was Clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Jumbo'
    this.setState({
      persons: [
      { name: newName, age: 100 },
      { name: 'Tony Stark', age: 200 },
      { name: 'Pitter Parker', age: 800 }
        
      ] 
    })
  };

  nameChangeHandler = (e) => {
    this.setState({
      persons: [
      { name: 'Loki', age: 100 },
      { name: e.target.value , age: 200 },
      { name: 'Pitter Parker', age: 800 }
        
      ] 
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

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Steve Rogers')}
        >Switch Name</button> { /* Not recommended */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Rogers!')}
          changed={this.nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
