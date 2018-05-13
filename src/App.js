import React, { Component } from 'react';
import './App.css';

import FollowerCount from "./components/FollowerCount.js";
import LastFollower from "./components/LastFollower.js";

const clientID = 'xxx'
const clientSecret = 'xxx'
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
  }

  render() {
    return (
      <div className="App">
        <FollowerCount
          followerCount={this.state.followerCount}
        />
        <LastFollower
          lastFollower={this.state.lastFollower}
        />
      </div>
    );
  }
}

export default App;
