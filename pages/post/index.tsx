import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { Post } from '@prisma/client'
import prisma from '@lib/prisma'
import { Box, Card, Text } from '@mantine/core'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      posts: JSON.parse(JSON.stringify(await prisma.post.findMany()))
    }
  }
}

const Post: React.FC<{ posts: Post[] }> = props => {
  const { posts } = props

  return (
    <Box>
      {posts.map(post => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <Card key={post.id}>
            <Text>{post.title}</Text>
          </Card>
        </Link>
      ))}
    </Box>
  )
}

export default Post
