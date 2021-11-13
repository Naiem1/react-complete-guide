import { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  // sideDrawerToggleHandler = () => {
  //   const doesShow = this.state.showSideDrawer;
  //   console.log('clicked');
  //   this.setState({ showSideDrawer: !doesShow });
  // }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </Aux>
    )
  }
}


export default Layout;