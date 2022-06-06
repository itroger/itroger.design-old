import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { User } from '@prisma/client'
import { prisma } from '@lib/prisma'

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await prisma.user.findMany()

  return {
    paths: users.map(user => ({
      params: { id: String(user.id) }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context

  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) }
  })

  return {
    props: { user: JSON.parse(JSON.stringify(user)) }
  }
}

const User: React.FC<{ user: User }> = props => {
  const { user } = props
  return <div>{user.name}</div>
}

export default User
