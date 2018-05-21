import React, { Component } from 'react'
import styled from 'styled-components'

import Doomfist from '../img/df.png'
import Trollface from '../img/troll.png'

import FollowerCount from "./FollowerCount.js";
import LastFollower from "./LastFollower.js";

// Imports propres au footer
import BottomBar from "./Overwatch/BottomBar.js";


const TheFooter = styled.footer`
  font-size: 25px;
  line-height: 50px;
`

class Footer extends Component {
  render() {
    return (
      <TheFooter>
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
          <BottomBar />
        </div>
        <div className="footer__right-column">
          <img src={Doomfist} className="doomfist" alt="Doomfist cute" />
          <img src={Trollface} className="trollface" alt="Trollface" />
        </div>
      </TheFooter>
    );
  }
}

export default Footer;
