import React,{ Component } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer';
import classes from './Layout.css';
import './Layout.css';
import Aux from '../Aux/Aux';
import Logo from '../../Containers/Logo/Logo';
import TourDates from '../../Components/TourDates/TourDates';

class Layout extends Component {

  render() {
    return (
      <Aux>
        <head>
          <title>
            Charlie and the Rays Unofficial Website
          </title>
        </head>
        <header className={classes.Nav}>
          <NavBar />
        </header>
        <body className={classes.Background}>
          <main id='visible' className={classes.Main}>

            <div className={classes.Full_Page}></div>
            <Logo />
            <MusicPlayer />
            <div id='about'>
              <h1>Meet the Rays</h1>
              <p>Info yea yea yea</p>
            </div>
            <div id='tour-dates'>
              <TourDates />
            </div>
            <div id='contact'>
              Contact Info
            </div>
          </main>
        </body>
      </Aux>
    );
  }
}

export default Layout;
