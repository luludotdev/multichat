import { NextPage } from 'next'
import Head from 'next/head'

const App: NextPage = () => (
  <>
    <Head>
      <title>Multichat</title>
    </Head>

    <div>
      <p>This is the root page.</p>
      <p>Navigate to a sub-page to access chat.</p>
    </div>
  </>
)

export default App
