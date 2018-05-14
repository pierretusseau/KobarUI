import React, { Component } from 'react'

import Doomfist from '../img/df.png'
import Trollface from '../img/troll.png'

import FollowerCount from "./Footer/FollowerCount.js";
import LastFollower from "./Footer/LastFollower.js";

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__left-column">
          {}
        </div>
        <div className="footer__central-column">
          <FollowerCount
            followerCount={this.props.followerCount}
            />
          <LastFollower
            lastFollower={this.props.lastFollower}
            />
        </div>
        <div className="footer__right-column">
          <img src={Doomfist} className="doomfist" alt="Doomfist cute" />
          <img src={Trollface} className="trollface" alt="Trollface" />
        </div>
      </footer>
    );
  }
}

export default Footer;
