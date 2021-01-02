import { Client as createClient } from 'tmi.js'

export const client = createClient({
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: 'justinfan12345',
    password: '',
  },
})

void client.connect().then(() => {
  // TODO: Connect to channels
  // const channels = window.location.pathname.split('/').filter(Boolean)
  // for (const channel of channels) {
  //   client.join(channel).then(chls => {
  //     for (const ch of chls) {
  //       sendSystemMessage(`Joined ${ch}`)
  //     }
  //   })
  // }
})
