import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { Post } from '@prisma/client'
import prisma from '@lib/prisma'
import { Box, Card } from '@mantine/core'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      posts: JSON.parse(JSON.stringify(await prisma.post.findMany()))
    }
  }
}

const PostList: React.FC<{ posts: Post[] }> = props => {
  const { posts } = props

  return (
    <Box>
      {posts.map(post => (
        <Card key={post.id}>
          <Link href={`/post/edit/${post.id}`}>{post.title}</Link>
        </Card>
      ))}
    </Box>
  )
}

export default PostList
