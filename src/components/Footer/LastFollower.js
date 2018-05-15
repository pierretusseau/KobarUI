import React, { Component } from 'react'
import styled from 'styled-components'
import Par from '../commons/GenericRules'

class LastFollower extends Component {
  render() {
    return (
			<div id="LastFollower" className="text-component">
        <Par color='#f80'>
          <span className="--uppercase">Dernier follower</span> : {this.props.lastFollower}
        </Par>
			</div>
    );
  }
}

export default LastFollower;
