import { EventEmitter } from 'eventemitter3'
import { Userstate } from 'tmi.js'
import { v4 as uuid } from 'uuid'
import { SYSTEM_CHANNEL } from '~constants'

interface ISystemEmitter {
  message: [string, Userstate, string]
}

class SystemEmitter extends EventEmitter<ISystemEmitter> {
  public send(message: string) {
    const state: Userstate = {
      id: uuid(),
      'display-name': 'Multichat',
    }

    this.emit('message', SYSTEM_CHANNEL, state, message)
  }
}

export const systemEmitter = new SystemEmitter()
export const sendSystemMessage = (message: string) => {
  systemEmitter.send(message)
}
