import React from 'react';
import logoImg from '../../Assets/CatR_Logo_Blue.png';
import classes from './Logo.css';

const logo = (props) => {

  return (
    <div className={classes.Full_Page} >
      <img className={classes.Logo} src={logoImg} alt='Blue logo' />
    </div>
  );
};

export default logo;
