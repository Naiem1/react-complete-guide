import './person.css';

const Person = props => {
  return (
    <div className="person">
      <p onClick={props.click}> I'm a {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default Person;