import { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider, useSession } from 'next-auth/react'
import { NotificationsProvider } from '@mantine/notifications'
import Layout from '@components/Layout'
import '@styles/globals.css'
import '@styles/juejin.css'

const App = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ auth: any }>) => {
  return (
    <Layout>
      <Head>
        <title>itroger.design</title>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <NotificationsProvider>
        <SessionProvider session={session}>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </NotificationsProvider>
    </Layout>
  )
}

export default App

const Auth = ({ children }) => {
  const { status } = useSession({ required: true })
  if (status === 'loading') {
    return <div>Loading ...</div>
  }

  return children
}
