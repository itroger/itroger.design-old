import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post } from '@prisma/client'
import { prisma } from '@/lib/prisma'
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
    <div className="flex justify-center h-full p-2">
      <div className="max-w-3xl w-full shadow-lg bg-white">
        <span className="text-2xl font-semibold mb-2">{post.title}</span>
        <Viewer value={post.content} />
      </div>
    </div>
  )
}

export default PostDetail
