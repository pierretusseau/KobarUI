import React, { Component } from 'react'
import {Wrapper, Par, SpanUppercase} from '../commons/GlobalStyles'

class FollowerCount extends Component {
  render() {
    return (
			<Wrapper>
        <Par>
          {this.props.followerCount} <SpanUppercase>followers</SpanUppercase>
        </Par>
			</Wrapper>
    );
  }
}

export default FollowerCount;
