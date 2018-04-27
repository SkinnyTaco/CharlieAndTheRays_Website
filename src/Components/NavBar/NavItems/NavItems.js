import React from 'react';
import NavItem from './NavItem/NavItem';
import MediaItem from './MediaItem/MediaItem';
import classes from './NavItems.css';
import Aux from '../../../hoc/Aux/Aux';
import instaIcon from '../../../Assets/instagram.png';
import fbIcon from '../../../Assets/facebook.png';
import ytIcon from '../../../Assets/youtube.png';

const navItems = (props) => {
  return (
    <Aux>
      <ul className={classes.NavPage}>
        <NavItem link='/#about'>About</NavItem>
        <NavItem link='/#music'>Music</NavItem>
        <NavItem link='/#tour-dates'>Tour Dates</NavItem>
        <NavItem link='/#contact'>Contact</NavItem>
      </ul>
      <ul className={classes.NavMedia}>
        <MediaItem link='https://www.instagram.com/charlieandtherays/'>
          <img className={classes.Icon}
            src={instaIcon}
            alt='Instagram icon'/>
        </MediaItem>
        <MediaItem link='https://www.facebook.com/charlieandtherays/'>
          <img className={classes.Icon}
            src={fbIcon}
            alt='Facebook icon'/>
        </MediaItem>
        <MediaItem link='https://www.youtube.com/channel/UCL2vsVmb97fBJDPUPOUAAEQ/featured'>
          <img className={classes.Icon}
            src={ytIcon}
            alt='Youtube Icon'/>
        </MediaItem>
      </ul>
    </Aux>
    );
}

export default navItems;
