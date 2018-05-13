import React, { Component } from 'react'

import './FollowerCount.css';

class FollowerCount extends Component {
  render() {
    return (
			<div id="FollowerCount">
        Nombre de follower : {this.props.followerCount}
			</div>
    );
  }
}

export default FollowerCount;
