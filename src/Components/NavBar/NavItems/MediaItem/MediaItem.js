import React from 'react';
import classes from './MediaItem.css';

const mediaItem = (props) => {
  return (
      <li className={classes.MediaItem}>
        <a href={props.link}
          target='_blank'>{props.children}</a>
      </li>
    );
}

export default mediaItem;
