
import Person from "./Persons/Person/Person";

const Persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((person, index) => {
    return <Person
      name={person.name}
      age={person.age}
      click={() => props.click(index, person.id)}
      key={person.id}
      changed={(event) => props.changed(event, person.id)}
    />
  })
};

export default Persons;