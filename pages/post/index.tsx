import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { Post } from '@prisma/client'
import { prisma } from '@/lib/prisma'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      posts: JSON.parse(JSON.stringify(await prisma.post.findMany()))
    }
  }
}

const Post: React.FC<{ posts: Post[] }> = props => {
  const { posts } = props

  const { data: session } = useSession()

  return (
    <div className="flex flex-col gap-4 p-4">
      {session && (
        <div className="flex gap-4">
          <Link href="/post/create">
            <a className="flex-1 py-2 font-semibold text-center text-white dark:text-black hover:text-black hover:dark:text-white bg-black dark:bg-white border border-black dark:border-white hover:bg-white hover:dark:bg-black rounded">
              新增文章
            </a>
          </Link>
          <Link href="/post/list">
            <a className="flex-1 py-2 font-semibold text-center text-black dark:text-white hover:text-white hover:dark:text-black bg-white dark:bg-black border border-black dark:border-white hover:bg-black hover:dark:bg-white rounded">
              文章管理
            </a>
          </Link>
        </div>
      )}
      <div className="flex flex-col gap-2">
        {posts.map(post => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <a
              key={post.id}
              className="flex flex-col gap-2 p-4 rounded border border-zinc-800 dark:border-zinc-400 hover:shadow-xl"
            >
              <span className="text-sm text-zinc-500 dark:text-zinc-300">
                {post.username} |{' '}
                {new Date(post.updatedAt).toISOString().split('T')[0]}
              </span>
              <span className="text-lg">{post.title}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Post
