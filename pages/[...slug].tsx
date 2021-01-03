import { NextPage } from 'next'
import { useChat } from '~hooks/useChat'

const Multichat: NextPage = () => {
  const messages = useChat()

  return (
    <>
      {messages.map(message => (
        <div key={message.userstate.id}>{message.text}</div>
      ))}
    </>
  )
}

export default Multichat
