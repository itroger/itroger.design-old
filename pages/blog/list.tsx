import React from 'react'
import { GetServerSideProps } from 'next'
import { Post } from '@prisma/client'
import prisma from '@lib/prisma'

const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.post.findMany()

  console.log(posts)

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}

const PostList: React.FC<Post[]> = props => {
  console.log(props)
  return <div>博客</div>
}

export default PostList
