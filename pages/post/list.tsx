import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { Post } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import format from '@/utils/date'

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
          <th className="border-b border-slate-300 py-2">作者</th>
          <th className="border-b border-slate-300 py-2">时间</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td className="border-b border-slate-300">
              <Link href={`/post/edit/${post.id}`}>
                <a className="text-center block w-full h-full p-2">
                  <span>{post.title}</span>
                </a>
              </Link>
            </td>
            <td className="text-center border-b border-slate-300">
              {post.username}
            </td>
            <td className="text-center border-b border-slate-300">
              {format(post.updatedAt)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PostList
