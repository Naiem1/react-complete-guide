import Person from "./Persons/Person/Person";

const Persons = (props) => props.persons.map((person, index) => {
  console.log(props);
    return <Person
      name={person.name}
      age={person.age}
      click={() => props.click(index, person.id)}
      key={person.id}
      changed={(event) => props.changed(event, person.id)}
    />
  })

export default Persons;