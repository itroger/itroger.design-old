import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Prisma, Post } from '@prisma/client'
import { Editor } from '@bytemd/react'
import axios from 'axios'
import editor from '@/utils/editor'
import { uploadFile, getFiles, deleteFiles } from '@/utils/files'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/github.css'

const PostCreate = () => {
  const [title, setTitle] = useState<string>('')
  const [tags, setTags] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [files, setFiles] = useState<string[]>([])

  const { data: session } = useSession()

  const handlePublish = async () => {
    if (!title) {
      return
    }
    if (!content) {
      return
    }

    await deleteFiles(files.filter(file => !getFiles().includes(file)))

    const post = await axios.post<Post, Post, Prisma.PostUncheckedCreateInput>(
      '/api/post',
      {
        title,
        content,
        cover: '',
        tags: tags.split(' '),
        userId: Number(session.user.id),
        username: session.user.name
      }
    )
  }

  return (
    <div className="flex flex-col gap-2 h-full p-2">
      <div className="editor flex flex-col md:flex-row gap-2">
        <input
          className="appearance-none outline-none flex-1 px-2 dark:text-zinc-200 bg-transparent border border-zinc-300 dark:border-666 rounded focus:border-black dark:focus:border-white"
          placeholder="输入文章标题..."
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="appearance-none outline-none flex px-2 dark:text-zinc-200 bg-transparent border border-zinc-300 dark:border-666 rounded focus:border-black dark:focus:border-white"
          placeholder="输入标签，空格分割"
          onChange={e => setTags(e.target.value)}
        />
        <button
          className="px-4 py-1 text-white dark:text-black hover:text-black hover:dark:text-white bg-black dark:bg-white border border-black dark:border-white hover:bg-white hover:dark:bg-black rounded"
          onClick={handlePublish}
        >
          发布
        </button>
      </div>
      <Editor
        placeholder="编辑文章..."
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

export default PostCreate
