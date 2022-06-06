import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { Post } from '@prisma/client'
import { prisma } from '@lib/prisma'
import { Box, Card, Text, Button } from '@mantine/core'

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
    <div className="flex flex-col p-4 gap-4">
      <Button className="bg-primary">
        <Link href="/post/create">新增文章</Link>
      </Button>
      <Box className="flex flex-col gap-2">
        {posts.map(post => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <Card key={post.id}>
              <Text>
                {post.username} |{' '}
                {new Date(post.updatedAt).toISOString().split('T')[0]}
              </Text>
              <Text>{post.title}</Text>
            </Card>
          </Link>
        ))}
      </Box>
    </div>
  )
}

export default Post
