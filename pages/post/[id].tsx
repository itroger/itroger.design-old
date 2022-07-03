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

  const data = new Date(post.updatedAt).toLocaleDateString().split('/')
  const time = new Date(post.updatedAt).toLocaleTimeString()

  return (
    <div className="flex justify-center h-full md:p-2">
      <div className="flex flex-col gap-4  max-w-5xl w-full p-4 md:px-8 md:py-8 bg-white md:bg-amber-50 dark:bg-black dark:md:bg-zinc-900 rounded-xl">
        <h2 className="text-2xl text-center font-semibold">{post.title}</h2>
        <div className="flex justify-center gap-4 text-gray-600 dark:text-gray-400">
          <span>{post.username}</span>
          <span>{`编辑于 ${data[0]}年${data[1]}月${data[2]}日 ${time}`}</span>
        </div>
        <Viewer value={post.content} />
      </div>
    </div>
  )
}

export default PostDetail
