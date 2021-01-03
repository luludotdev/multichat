import { Client as createClient } from 'tmi.js'
import { IS_SERVER } from '~constants'
import { sendSystemMessage } from './system'

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

if (IS_SERVER === false) {
  void client.connect().then(() => {
    const channels = window.location.pathname.split('/').filter(Boolean)
    for (const channel of channels) {
      void client.join(channel).then(chls => {
        for (const ch of chls) {
          sendSystemMessage(`Joined ${ch}`)
        }
      })
    }
  })
}
