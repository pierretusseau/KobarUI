import React, { Component } from 'react'
import config from './.config.json'
import WebFont from 'webfontloader'
import BigNoodle from './fonts/big_noodle_titling.ttf'
import Doomfist from './img/df.png'
import Trollface from './img/troll.png'
import './App.css'

import FollowerCount from "./components/FollowerCount.js";
import LastFollower from "./components/LastFollower.js";

console.dir(BigNoodle)

const WebFontConfig = {
  google: {
    families: ['Droid Sans']
  },
  custom: {
    families: ['BigNoodle'],
    urls: [BigNoodle]
  }
}
console.dir(WebFontConfig)
WebFont.load(WebFontConfig)

const clientID = config.clientID
const clientSecret = config.clientSecret
const clientName = 'myKobaru'
const myHeaders = new Headers({
  'Client-ID': clientID
})
const fetchPost = {
  method: 'POST'
}
const fetchUsers = {
  method: 'GET',
  headers: myHeaders
}

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
        <header>
          {}
        </header>
        <div className="main-content">
          {}
        </div>
        <footer>
          <div className="footer__left-column">
            {}
          </div>
          <div className="footer__central-column">
            <FollowerCount
              followerCount={this.state.followerCount}
              />
            <LastFollower
              lastFollower={this.state.lastFollower}
              />
          </div>
          <div className="footer__right-column">
            <img src={Doomfist} className="doomfist" alt="Doomfist cute" />
            <img src={Trollface} className="trollface" alt="Trollface" />
          </div>
        </footer>
      </div>
    );
  }

  componentDidMount() {
    // Récupération de l'ID Client + Total de follower + Dernier Follower
    fetch('https://api.twitch.tv/helix/users?login=' + clientName, fetchUsers)
    .then(res => {
      return res.json()
    })
    .then(resJson => {
      this.setState({
        userId: resJson.data[0].id
      })
      fetch('https://api.twitch.tv/helix/users/follows?to_id=' + this.state.userId, fetchUsers)
      .then(res => {
        return res.json()
      })
      .then(resJson => {
        this.setState({
          followerCount: resJson.total
        })
        fetch('https://api.twitch.tv/helix/users?id=' + resJson.data[0].from_id, fetchUsers)
        .then(res => {
          return res.json()
        })
        .then(resJson => {
          this.setState({
            lastFollower: resJson.data[0].display_name
          })
        })
      })
    })

    // Récupération de l'Access Token
    fetch('https://id.twitch.tv/oauth2/token?client_id=' + clientID + '&client_secret=' + clientSecret + '&grant_type=client_credentials', fetchPost)
    .then(res => {
      return res.json()
    })
    .then(responseJson => {
      this.setState({
        accessToken: responseJson.access_token
      })
    })

    document.querySelector('.doomfist').addEventListener('mousedown', function () {
      document.querySelector('.trollface').classList.toggle('fasttrollface')
    })
    document.querySelector('.doomfist').addEventListener('mouseup', function () {
      document.querySelector('.trollface').classList.toggle('fasttrollface')
    })
  }
}

export default App;
