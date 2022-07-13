import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Post, Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { Editor } from '@bytemd/react'
import editor from '@/utils/editor'
import axios from 'axios'
import { getFiles, deleteFiles, uploadFile } from '@/utils/files'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/github.css'

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
  const [tags, setTags] = useState<string>(post.tags.join(' '))
  const [content, setContent] = useState<string>(post.content)
  const [files, setFiles] = useState<string[]>([])

  const router = useRouter()

  useEffect(() => {
    setFiles(getFiles())
  }, [])

  const handleEdit = async () => {
    if (!title) {
      return
    }
    if (!content) {
      return
    }

    await deleteFiles(files.filter(file => !getFiles().includes(file)))

    const post = await axios.put<Post, Post, Prisma.PostUpdateInput>(
      `/api/post?id=${props.post.id}`,
      {
        title,
        tags: tags.split(' '),
        content
      }
    )
  }

  const handleDelete = async () => {
    await deleteFiles(Array.from(new Set([...getFiles(), ...files])))

    await axios.delete<Post, Post, any>(`/api/post?id=${props.post.id}`)

    await router.replace('/post/list')
  }

  return (
    <div className="flex flex-col gap-2 h-full p-2">
      <div className="editor flex flex-col md:flex-row gap-2">
        <input
          className="appearance-none outline-none flex-1 px-2 dark:text-zinc-200 bg-transparent border border-zinc-300 dark:border-666 rounded focus:border-black dark:focus:border-white"
          placeholder="输入文章标题..."
          defaultValue={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="appearance-none outline-none flex px-2 dark:text-zinc-200 bg-transparent border border-zinc-300 dark:border-666 rounded focus:border-black dark:focus:border-white"
          placeholder="输入标签，空格分割"
          defaultValue={tags}
          onChange={e => setTags(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            className="flex-1 px-4 py-1 text-white dark:text-black hover:text-black hover:dark:text-white bg-black dark:bg-white border border-black dark:border-white hover:bg-white hover:dark:bg-black rounded"
            onClick={handleEdit}
          >
            发布
          </button>
          <button
            className="flex-1 px-4 py-1 text-white dark:text-white hover:text-black hover:dark:text-white bg-red-400 border border-red-400 hover:bg-white dark:hover:bg-black rounded"
            onClick={handleDelete}
          >
            删除
          </button>
        </div>
      </div>
      <Editor
        locale={editor.locale}
        plugins={editor.plugins}
        value={content}
        onChange={v => setContent(v)}
        uploadImages={async files => {
          const imgArr = await Promise.all(files.map(file => uploadFile(file)))
          setFiles(prevState => [
            ...prevState,
            ...imgArr.map(img => img.url.split('/').reverse()[0])
          ])
          return imgArr
        }}
      />
    </div>
  )
}

export default PostEdit
