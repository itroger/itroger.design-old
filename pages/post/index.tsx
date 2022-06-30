import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { Post } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { Button } from 'antd'

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
      <Button type="primary">
        <Link href="/post/create">新增文章</Link>
      </Button>
      <div className="flex flex-col gap-2">
        {posts.map(post => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <div key={post.id}>
              <span>
                {post.username} |{' '}
                {new Date(post.updatedAt).toISOString().split('T')[0]}
              </span>
              <span>{post.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Post
