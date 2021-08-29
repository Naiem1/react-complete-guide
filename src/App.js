import './App.css';
import { Component, useState } from 'react';
import Person from './Person/Person';

const App =  () => {
  
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Harry Porter', age: 100 },
      { name: 'Tony Stark', age: 200 },
      { name: 'Pitter Parker', age: 300 }
    ],
    otherState: 'some other value'
  });

  console.log(personState);

  const switchNameHandler = e => {
    console.log('was Clicked');
    // DON'T DO THIS: setPersonState.persons[0].name = 'Jumbo'
    setPersonState({
      ...personState,
      persons: [
      { name: 'Super Man', age: 100 },
      { name: 'Tony Stark', age: 200 },
      { name: 'Pitter Parker', age: 800 }
        
      ] 
    })
  };


    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
        />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={personState.persons[2].name}
          age={personState.persons[2].age}
        />
      </div>
    );

}

export default App;


// class App extends Component {
  
//   state = {
//     persons: [
//       { name: 'Harry Porter', age: 100 },
//       { name: 'Tony Stark', age: 200 },
//       { name: 'Pitter Parker', age: 300 }
//     ],
//     otherState: 'some other value'
//   }

//   switchNameHandler = e => {
//     console.log('was Clicked');
//     // DON'T DO THIS: this.state.persons[0].name = 'Jumbo'
//     this.setState({
//       persons: [
//       { name: 'Super Man', age: 100 },
//       { name: 'Tony Stark', age: 200 },
//       { name: 'Pitter Parker', age: 800 }
        
//       ] 
//     })
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm React App</h1>
//         <p>This is really working!</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         >
//           My Hobbies: Racing
//         </Person>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//   }
// }

// export default App;
