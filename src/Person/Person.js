import './person.css';
import Radium from 'radium';

const Person = props => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div className="person" style={style}>
      <p onClick={props.click}> I'm a {props.name} and I am {props.age} years old!</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default Radium(Person);