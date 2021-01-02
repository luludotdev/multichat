import { EventEmitter } from 'eventemitter3'
import { Userstate } from 'tmi.js'
import { SYSTEM_CHANNEL } from '~constants'

interface ISystemEmitter {
  message: [string, Userstate, string]
}

class SystemEmitter extends EventEmitter<ISystemEmitter> {
  public send(message: string) {
    const state: Userstate = {
      'display-name': 'Multichat',
    }

    this.emit('message', SYSTEM_CHANNEL, state, message)
  }
}

export const systemEmitter = new SystemEmitter()
export const sendSystemMessage = (message: string) => {
  systemEmitter.send(message)
}
