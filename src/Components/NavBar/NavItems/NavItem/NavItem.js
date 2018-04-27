import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import classes from './NavItem.css';

const navItem = (props) => {
  return (
      <li className={classes.NavItem}>
        <Link to={props.link}
        scroll={(el) => el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'})}>{props.children}</Link>
      </li>
    );
}

export default navItem;
