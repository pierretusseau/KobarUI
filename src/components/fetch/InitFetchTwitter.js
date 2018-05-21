import config from '../../.config.json'

const clientID = config.twitter.clientID // eslint-disable-line
const clientSecret = config.twitter.clientSecret // eslint-disable-line
const spofityHeaders = new Headers({
  //
})
const fetchSpotifyHeaders = {
  method: 'GET',
  headers: spofityHeaders
}
export function getTweet () {
  return fetch('', fetchSpotifyHeaders)
  .then(res => {
    // console.log(res)
  })
}
