import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { Post } from '@prisma/client'
import { prisma } from '@/lib/prisma'

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
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <Link href={`/post/edit/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default PostList
