import classes from './Cockpit.module.css';

const Cockpit = props => {
  // let classes = ['red', 'bold'].join(' ');
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
    
 return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.togglePersonHandler}
      >Toggle Persons</button>
    </div>
  )
};

export default Cockpit;

/* ## Component Lifecycle
`constructor()`
`getDerivedState4FromProps()`
`getSnapshotBeforeUpdate()`
`componentDidCatch()`
`componentWillUnmount()`
`shouldComponentUpdate()`
`componentDidUpdate()`
`componentDidMount()`
`render()` */