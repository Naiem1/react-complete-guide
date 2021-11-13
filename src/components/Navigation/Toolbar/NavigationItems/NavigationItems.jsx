import NavigationItem from './NavigationItem/NavigationItme';
import classes from './NavigationItems.module.css';

const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem ink="/">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;