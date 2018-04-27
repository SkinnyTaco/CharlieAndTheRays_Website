import React from 'react';
import classes from './Show.css';

const show = (props) => {
  return (
    <div className={classes.Tour_Date}>
      <p>{props.date} {props.city},{props.state} @ {props.venue}</p>
    </div>

  );
};

export default show;
