import React, { Component } from 'react'

import './LastFollower.css';

class LastFollower extends Component {
  render() {
    return (
			<div id="LastFollower" className="text-component">
        <p>
          <span className="--uppercase">Dernier follower</span> : {this.props.lastFollower}
        </p>
			</div>
    );
  }
}

export default LastFollower;
