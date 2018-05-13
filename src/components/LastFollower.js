import React, { Component } from 'react'

import './LastFollower.css';

class LastFollower extends Component {
  render() {
    return (
			<div id="LastFollower">
        Dernier follower : {this.props.lastFollower}
			</div>
    );
  }
}

export default LastFollower;
