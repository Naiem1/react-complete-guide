import { Component } from 'react';
import styled from 'styled-components';
import classes from './person.module.css';
  

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
    <div className={classes.person}>
        <p onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      
    </div>
  );
  }
};

export default Person;