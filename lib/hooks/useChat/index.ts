import { IS_SERVER } from '~constants'
import { useChatClient } from './hook'

export const useChat: typeof useChatClient = (...args) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return IS_SERVER ? [] : useChatClient(...args)
}

export { client } from './gateway'
export type { IChatMessage } from './hook'
export { sendSystemMessage } from './system'
