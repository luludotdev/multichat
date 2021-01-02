import { Reducer, useEffect, useReducer } from 'react'
import { Events, Userstate } from 'tmi.js'
import { client } from './gateway'

export enum MessageType {
  Action = 'action',
  Chat = 'chat',
  Cheer = 'cheer',
  Redeem = 'redeem',
}

export interface IChatMessage {
  channel: string
  userstate: Userstate
  message: string
  type: MessageType
}

type Listener = (channel: string, userstate: Userstate, message: string) => void

const events: Array<keyof Events> = ['chat', 'cheer', 'action']
const useChat = (limit = 50, onMessage?: (m: IChatMessage) => any) => {
  const [messages, dispatch] = useReducer<
    Reducer<IChatMessage[], IChatMessage>
  >((state, action) => [...state, action].slice(-1 * limit), [])

  useEffect(() => {
    const listener: Listener = (channel, userstate, message) => {
      const type =
        userstate['message-type'] === 'action'
          ? MessageType.Action
          : userstate['message-type'] === 'chat'
          ? MessageType.Chat
          : userstate['custom-reward-id'] !== undefined
          ? MessageType.Redeem
          : MessageType.Cheer

      const m: IChatMessage = { channel, userstate, message, type }
      dispatch(m)

      if (typeof onMessage === 'function') onMessage(m)
    }

    for (const event of events) {
      client.addListener(event, listener)
    }

    return () => {
      for (const event of events) {
        client.removeListener(event, listener)
      }
    }
  })

  return messages
}

export { useChat as useChatClient }
