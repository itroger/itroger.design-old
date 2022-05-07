import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@components/Layout'
import '@styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>itroger.design</title>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
