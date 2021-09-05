import styled from 'styled-components';
import { Component } from 'react';
import classes from './person.module.css';
  

const Person = props => {
  console.log('[Person.js] rendering...');
  return (
    <div className={classes.person}>
        <p onClick={props.click}> I'm a {props.name} and I am {props.age} years old!</p>
        <input
          type="text"
          onChange={props.changed}
          value={props.name}
        />
      
    </div>
  );
};

export default Person;