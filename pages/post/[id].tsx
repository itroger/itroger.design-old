import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post } from '@prisma/client'
import prisma from '@lib/prisma'
import { Box, Card, Text } from '@mantine/core'
import { Viewer } from '@bytemd/react'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prisma.post.findMany()

  return {
    paths: posts.map(post => ({
      params: { id: post.id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context

  const post = await prisma.post.findUnique({
    where: { id: String(params.id) }
  })

  if (post) {
    return {
      props: {
        post: JSON.parse(JSON.stringify(post))
      }
    }
  }

  return {
    redirect: {
      destination: '/post',
      permanent: false
    }
  }
}

const PostDetail: React.FC<{ post: Post }> = props => {
  const { post } = props

  return (
    <Box className="flex justify-center h-full p-2">
      <Card className="max-w-3xl w-full shadow-lg bg-white">
        <Text className="text-2xl font-semibold mb-2">{post.title}</Text>
        <Viewer value={post.content} />
      </Card>
    </Box>
  )
}

export default PostDetail
