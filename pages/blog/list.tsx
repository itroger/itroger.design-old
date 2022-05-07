import React from 'react'
import { GetServerSideProps } from 'next'
import { Post } from '@prisma/client'
import prisma from '@lib/prisma'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      posts: JSON.parse(JSON.stringify(await prisma.post.findMany()))
    }
  }
}

const PostList: React.FC<{ posts: Post[] }> = props => {
  console.log(props)
  return <div>博客</div>
}

export default PostList
