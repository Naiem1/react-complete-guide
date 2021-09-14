import { Component } from 'react';
import Person from "./Persons/Person/Person";

class Persons extends Component  {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // };

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // };  not use

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapShortBeforeUpdate');
    return { message: 'Snapshot!' };
  };
  
  // componentWilUpdate() {
  //   console.log('[Persons.js] componentWillUpdate');
  // };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
    return <Person
      name={person.name}
      age={person.age}
      click={() => this.props.click(index, person.id)}
      key={person.id}
      changed={(event) => this.props.changed(event, person.id)}
    />
  })
 }
};

export default Persons;