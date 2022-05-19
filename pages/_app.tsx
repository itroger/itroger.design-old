import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextComponentType } from 'next'
import { Session } from 'next-auth/core/types'
import { SessionProvider } from 'next-auth/react'
import { NotificationsProvider } from '@mantine/notifications'
import Layout from '@components/Layout'
import Auth from '@components/Auth'
import '@styles/globals.css'
import '@styles/juejin.css'

interface AppProps {
  Component: NextComponentType
  pageProps: { session: Session }
}

const App: React.FC<AppProps> = props => {
  const {
    Component,
    pageProps: { session, ...pageProps }
  } = props

  const router = useRouter()

  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <title>itroger.design</title>
          <link rel="icon" href="/favicon.svg" type="image/svg" />
        </Head>
        <NotificationsProvider>
          {router.asPath
            .split('/')
            .filter(path => ['create', 'edit', 'list'].includes(path)).length >
          0 ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </NotificationsProvider>
      </Layout>
    </SessionProvider>
  )
}

export default App
