import React, { Component } from 'react'
import './App.css'


import { getFollower } from './components/fetch/InitFetchTwitch'
import { getCurrentSong } from './components/fetch/InitFetchSpotify'
import { getTweet } from './components/fetch/InitFetchTwitter'

import Spotify from 'spotify-web-api-js'

import Header from "./components/Header.js";
import MainContent from "./components/MainContent.js";
import Footer from "./components/Footer.js";

// import { SketchPicker } from 'react-color'
// import ColorPicker from "./components/ColorPicker.js";

const spotifyWebApi = new Spotify()

class App extends Component {
  constructor() {
    super()

    const params = this.getHashParams()

		this.state = {
      spotify: {
        loggenIn: params.access_token ? true : false,
        nowPlaying: {
          name: 'Not checked',
          image: ''
        }
      },
      globalStyle: {
        primaryColor: '#fac'
      },
			followerCount: 0,
      userId: '',
      lastFollower: '',
      accessToken: ''
		}
    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token)
    }
  }

  getHashParams () {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getNowPlaying () {
    // console.log('get now playing')
    spotifyWebApi.getMyCurrentPlaybackState()
    .then((res) => {
      console.log(res)
      this.setState({
        spotify: {
            nowPlaying: {
            name: res.item.name,
            image: res.item.album.images[0].url
          }
        }
      })
    })
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
        <a href="http://localhost:8888">
          <button>Login spotify</button>
        </a>
        <div>
          Now playing: { this.state.spotify.nowPlaying.name }
        </div>
        <div>
          <img src={ this.state.spotify.nowPlaying.image } style={{ width:100 }}/>
        </div>
        <button onClick={ () => this.getNowPlaying() }>
          Check now playing
        </button>
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
