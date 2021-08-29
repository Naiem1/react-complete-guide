import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working!</p>
      <button>Switch Name</button>
      <Person name="Harry Potter" age="100"/>
      <Person name="Tony Stack" age="200">My Hobbies: Racing</Person>
      <Person name="Pitter Parker" age="300"/>
    </div>
  );
}

export default App;
