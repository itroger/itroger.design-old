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
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b border-slate-300 py-2">标题</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td className="border-b border-slate-300">
              <Link href={`/post/edit/${post.id}`}>
                <a className="block w-full h-full p-2">{post.title}</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PostList
