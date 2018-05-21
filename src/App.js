import React, { Component } from 'react'
import './App.css'

import { getFollower } from './components/fetch/InitFetchTwitch'
import { getCurrentSong } from './components/fetch/InitFetchSpotify'
import { getTweet } from './components/fetch/InitFetchTwitter'

import Header from "./components/Header.js";
import MainContent from "./components/MainContent.js";
import Footer from "./components/Footer.js";

// import { SketchPicker } from 'react-color'
// import ColorPicker from "./components/ColorPicker.js";

class App extends Component {
  constructor() {
    super()

		this.state = {
      globalStyle: {
        primaryColor: '#fac'
      },
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
          primaryColor={this.state.globalStyle.primaryColor}
        />
      </div>
    );
  }

  // TODO: AJOUTER LE COMPONENT COLOR PICKER (Trello vert)
  // <ColorPicker
  //   color={ this.state.globalStyle.primaryColor }
  //   onChangeComplete={ this.handleChangeComplete }
  // />

  componentDidMount() {
    getTweet() // TODO: Récupérer un tweet en gérant la requête en Node

    getCurrentSong() // TODO: Faire un node pour gérer les requêtes spotify (Kevbac Trello vert)

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

export default App
