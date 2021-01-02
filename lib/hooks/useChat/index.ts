import { IS_SERVER } from '~constants'

export const useChat = () => {
  return IS_SERVER ? [] : []
}

export { client } from './gateway'
