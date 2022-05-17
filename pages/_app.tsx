import { AppProps } from 'next/app'
import Head from 'next/head'
import { NotificationsProvider } from '@mantine/notifications'
import Layout from '@components/Layout'
import '@styles/globals.css'
import '@styles/juejin.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>itroger.design</title>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <NotificationsProvider>
        <Component {...pageProps} />
      </NotificationsProvider>
    </Layout>
  )
}

export default App
