import React, { Component } from 'react'
import WebFont from 'webfontloader'
// import BigNoodle from './fonts/big_noodle_titling.ttf'
import './App.css'

import { getFollower } from './components/fetch/InitFetch'

import Header from "./components/Header.js";
import MainContent from "./components/MainContent.js";
import Footer from "./components/Footer.js";

const WebFontConfig = {
  google: {
    families: ['Droid Sans']
  }
}
WebFont.load(WebFontConfig)

class App extends Component {
  constructor() {
    super()

		this.state = {
			followerCount: 0,
      userId: '',
      lastFollower: '',
      accessToken: ''
		}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer
          followerCount={this.state.followerCount}
          lastFollower={this.state.lastFollower}
        />
      </div>
    );
  }

  componentDidMount() {
    getFollower().then(res => {
      this.setState(res)
    })

    const theDoomfist = document.querySelector('.doomfist')
    const theTrollface = document.querySelector('.trollface')

    theDoomfist.addEventListener('mousedown', function (e) {
      e.preventDefault()
      theTrollface.classList.toggle('fasttrollface')
    })
    theDoomfist.addEventListener('mouseup', function () {
      theTrollface.classList.toggle('fasttrollface')
    })
    theDoomfist.addEventListener('mouseout', function () {
      if (theTrollface.classList.contains('fasttrollface')) {
        theTrollface.classList.remove('fasttrollface')
      }
    })
  }
}

export default App;
