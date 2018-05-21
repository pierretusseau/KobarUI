import React, { Component } from 'react'
import styled  from 'styled-components'

const TheBottomBar = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 200%;
  background: rgba(255,255,255,0.25);
  border-radius: 100px 100px 0% 0%;
  top: 0px;
  box-shadow: 0px 0px 30px rgba(255,255,255,1);
  border: solid 2px white;
  display: flex;
  justify-content: space-around;
  &:before,&:after {
    content: "";
    position: relative;
    width: 15vw;
    height: 5px;
    background-color: white;
    top: -5px;
  }
`
const ElementCentral = styled.div`
  position: absolute;
  width: 15vw;
  height: 10px;
  top: -10px;
  background-color: white;
  &:before,&:after {
    content: "";
    position: absolute;
    height : 0;
    width : 0;
  }
  &:before {
    left: -10px;
    border-bottom : 10px solid white;
    border-left : 10px solid transparent;
  }
  &:after {
    right: -10px;
    border-right : 10px solid transparent;
    border-bottom : 10px solid white;
  }
`

class LastFollower extends Component {
  render() {
    return (
      <TheBottomBar>
        <ElementCentral></ElementCentral>
      </TheBottomBar>
    );
  }
}

export default LastFollower;
