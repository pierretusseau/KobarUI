import React, { Component } from 'react'
import {Wrapper, Par, SpanUppercase} from '../commons/GlobalStyles'

class LastFollower extends Component {
  render() {
    return (
			<Wrapper>
        <Par>
          <SpanUppercase>Dernier follower</SpanUppercase> : {this.props.lastFollower}
        </Par>
			</Wrapper>
    );
  }
}

export default LastFollower;
