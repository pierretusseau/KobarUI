import config from '../../.config.json'

const clientID = config.spotify.clientID
const clientSecret = config.spotify.clientSecret
const encodedID = btoa(clientID)
const encodedSecret = btoa(clientSecret)
const spofityHeaders = new Headers({
  Authorization: encodedID + ':' + encodedSecret
})
const fetchSpotifyHeaders = { // eslint-disable-line
  method: 'GET',
  headers: spofityHeaders
}
const redirectURI = 'http://localhost:3000/callback'
const scope = 'user-read-currently-playing'
const authorizeReq = // eslint-disable-line
                    'https://' +
                    'accounts.spotify.com/authorize/?' +
                    'client_id=' + clientID +
                    '&response_type=code' +
                    '&redirect_uri=' + redirectURI +
                    '&scope=' + scope
                    // '&state=34fFs29kd09'


export function getCurrentSong () {
  // return fetch(authorizeReq, fetchSpotifyHeaders)
  // .then(res => {
  //   console.log(res)
  // })
}
