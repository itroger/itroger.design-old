import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@lib/prisma'

const auth: NextApiHandler = async (req, res) => {
  return NextAuth(req, res, {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      })
    ],
    adapter: PrismaAdapter(prisma),
    session: {
      strategy: 'database',
      maxAge: 24 * 60 * 60,
      updateAge: 24 * 60 * 60
    },
    pages: {
      signIn: '/login'
    }
  })
}

export default auth
