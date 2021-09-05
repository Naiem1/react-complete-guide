import styled from 'styled-components';
import classes from './person.module.css';

const StyledDiv =  styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #EEE;
    box-shadow: 0 2px 3px #CCC;
    padding: 16px;
    text-align: center;

    @media (min-with: 500px) {
        width: 450px;
    }   
  `

const Person = props => {
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