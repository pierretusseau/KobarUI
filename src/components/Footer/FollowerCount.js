import React, { Component } from 'react'
import styled from 'styled-components'
import Par from '../commons/GenericRules'

const Wrapper = styled.div`
  // font-size: 1.5em;
  // font-weight: bold;
  font-family: 'Droid Sans';
  color: white;
`

class FollowerCount extends Component {
  render() {
    return (
			<Wrapper>
        <Par color='#f00'>
          {this.props.followerCount} followers
        </Par>
			</Wrapper>
    );
  }
}

export default FollowerCount;
