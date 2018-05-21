import React, { Component } from 'react'
import { SketchPicker } from 'react-color'

class ColorPicker extends Component {

  render() {
    console.log(this)
    return (
      <SketchPicker />
    );
  }
}

export default ColorPicker
