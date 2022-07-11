import React from 'react'
import { GetServerSideProps } from 'next'
import {
  getProviders,
  getSession,
  signIn,
  ClientSafeProvider
} from 'next-auth/react'
import Logos from '@/components/Logos'

export const getServerSideProps: GetServerSideProps = async context => {
  const providers = await getProviders()
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { providers }
  }
}

const Login: React.FC<{ providers: ClientSafeProvider[] }> = props => {
  const { providers } = props

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-full">
      {Object.values(providers).map(provider => (
        <div
          key={provider.id}
          className="flex gap-4 px-6 py-2 rounded-md bg-black text-white cursor-pointer"
          onClick={() => signIn(provider.id)}
        >
          <Logos.GithubSvg />
          <span className="font-semibold">Continue with {provider.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Login
