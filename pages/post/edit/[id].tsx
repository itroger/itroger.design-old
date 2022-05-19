import React, { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Post, Prisma } from '@prisma/client'
import { prisma } from '@lib/prisma'
import { Button, TextInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { Editor } from '@bytemd/react'
import editor from '@utils/editor'
import axios from 'axios'

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

const PostEdit: React.FC<{ post: Post }> = props => {
  const { post } = props
  const [title, setTitle] = useState<string>(post.title)
  const [content, setContent] = useState<string>(post.content)

  const router = useRouter()

  const handleEdit = async () => {
    if (!title) {
      return showNotification({ message: '请输入文章标题' })
    }
    if (!content) {
      return showNotification({ message: '请编写文章' })
    }
    const post = await axios.put<Post, Post, Prisma.PostUpdateInput>(
      `/api/post?id=${props.post.id}`,
      {
        title,
        content
      }
    )
    if (post) {
      return showNotification({ message: '修改文章成功' })
    }
  }

  const handleDelete = async () => {
    const post = await axios.delete<Post, Post, any>(
      `/api/post?id=${props.post.id}`
    )

    if (post) {
      showNotification({ message: '删除文章成功' })
      await router.replace('/post/list')
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="editor flex gap-4 p-2">
        <TextInput
          className="flex-1 border-none"
          placeholder="输入文章标题..."
          defaultValue={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Button className="bg-primary tracking-widest" onClick={handleEdit}>
          发布
        </Button>
        <Button className="bg-pink-400 tracking-widest" onClick={handleDelete}>
          删除
        </Button>
      </div>
      <Editor
        locale={editor.locale}
        plugins={editor.plugins}
        value={content}
        onChange={v => setContent(v)}
      />
    </div>
  )
}

export default PostEdit
