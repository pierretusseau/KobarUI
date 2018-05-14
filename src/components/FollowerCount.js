import React, { Component } from 'react'

import './FollowerCount.css';

class FollowerCount extends Component {
  render() {
    return (
			<div id="FollowerCount" className="text-component --uppercase">
        <p>
          {this.props.followerCount} follower
        </p>
			</div>
    );
  }
}

export default FollowerCount;
