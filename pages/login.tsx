import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getProviders, getSession, signIn } from 'next-auth/react'
import { Text } from '@mantine/core'
import Logos from '@components/Logos'

export const getServerSideProps: GetServerSideProps = async context => {
  const providers = await getProviders()
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: String(context.query.callbackUrl),
        permanent: false
      }
    }
  }

  return {
    props: { providers }
  }
}

const Login = ({
  providers
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="flex justify-center items-center h-full">
      {Object.values(providers).map((provider: any) => (
        <div
          key={provider.id}
          className="flex gap-4 px-4 py-2 rounded-md bg-black text-white cursor-pointer"
          onClick={() => signIn(provider.id)}
        >
          <Logos.GithubSvg />
          <Text>Sign in with {provider.name}</Text>
        </div>
      ))}
    </div>
  )
}

export default Login
