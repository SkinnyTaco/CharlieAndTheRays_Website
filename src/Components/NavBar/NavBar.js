import React, {Component} from 'react';
import NavItems from './NavItems/NavItems';
import classes from './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className={classes.Show}>
        <NavItems />
      </div>
    );
  }
}

export default NavBar;
