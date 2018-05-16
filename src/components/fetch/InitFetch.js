import config from '../../.config.json'

const clientID = config.clientID
// const clientSecret = config.clientSecret
const clientName = 'myKobaru'
const myHeaders = new Headers({
  'Client-ID': clientID
})
const fetchUsers = {
  method: 'GET',
  headers: myHeaders
}

export function getFollower () {
  return fetch('https://api.twitch.tv/helix/users?login=' + clientName, fetchUsers)
  .then(res => {
    return res.json()
  })
  .then(resJson => {
    const userId = resJson.data[0].id
    return fetch('https://api.twitch.tv/helix/users/follows?to_id=' + userId, fetchUsers)
    .then(res => {
      return res.json()
    })
    .then(resJson => {
      const followerCount = resJson.total
      const fromId = resJson.data[0].from_id
      return fetch('https://api.twitch.tv/helix/users?id=' + fromId, fetchUsers)
      .then(res => {
        return res.json()
      })
      .then(resJson => {
        return {
          followerCount: followerCount,
          lastFollower: resJson.data[0].display_name
        }
      })
    })
  })
}
