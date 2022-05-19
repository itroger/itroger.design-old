import React, { useState } from 'react'
import { Prisma, Post } from '@prisma/client'
import { supabase } from '@lib/supabase'
import { Button, TextInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { Editor } from '@bytemd/react'
import editor from '@utils/editor'
import axios from 'axios'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/github.css'

const PostCreate = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handlePublish = async () => {
    if (!title) {
      return showNotification({ message: '请输入文章标题' })
    }
    if (!content) {
      return showNotification({ message: '请编写文章' })
    }
    const post = await axios.post<Post, Post, Prisma.PostCreateInput>(
      '/api/post',
      {
        title,
        content
      }
    )
    if (post) {
      return showNotification({ message: '创建文章成功' })
    }
  }

  const uploadImage: (file: File) => Promise<any> = async file => {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    return new Promise(async (resolve, reject) => {
      const { data, error: uploadErr } = await supabase.storage
        .from(process.env.SUPABASE_BUCKET)
        .upload(filePath, file)

      if (uploadErr) {
        reject({ message: `Unable to upload image to storage: ${uploadErr}` })
      }

      resolve({
        url: `${process.env.SUPABASE_URL.replace(
          '.co',
          '.in'
        )}/storage/v1/object/public/${data.Key}`
      })
    })
  }

  return (
    <div className="flex flex-col h-full">
      <div className="editor flex gap-4 p-2">
        <TextInput
          className="flex-1 border-none"
          placeholder="输入文章标题..."
          onChange={e => setTitle(e.target.value)}
        />
        <Button className="bg-primary" onClick={handlePublish}>
          发布
        </Button>
      </div>
      <Editor
        locale={editor.locale}
        plugins={editor.plugins}
        value={content}
        onChange={v => setContent(v)}
        uploadImages={async files =>
          await Promise.all(files.map(file => uploadImage(file)))
        }
      />
    </div>
  )
}

export default PostCreate
