import React from 'react';
import classes from './MusicPlayer.css';

const musicPlayer = (props) => {
  return (
    <div id='music'
      className={classes.Music_Page}>
      <h1 className={classes.Header}>
        New Ep
      </h1>

      <iframe title='Bandcamp player'
        className={classes.Player}
        src="https://bandcamp.com/EmbeddedPlayer/album=2055071122/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
        seamless>
        <a href="http://charlieandtherays.bandcamp.com/album/song-of-love-ep">
          Song Of Love EP by Charlie and the Rays
        </a>
      </iframe>
    </div>);
};

export default musicPlayer;
