import { useState } from 'react'
import { Prisma, Post } from '@prisma/client'
import { Button, TextInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { Editor, EditorProps } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import axios from 'axios'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/github.css'
import { useSession } from 'next-auth/react'

const CreatePost = () => {
  const [title, setTitle] = useState<string>()
  const [content, setContent] = useState<string>()
  const { status } = useSession()

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
        locale={locale}
        plugins={plugins}
        value={content}
        onChange={v => setContent(v)}
      />
    </div>
  )
}

export default CreatePost

CreatePost.auth = {
  unauthorized: '/login'
}

export const plugins = [gfm(), highlight()]

export const locale: EditorProps['locale'] = {
  write: '编辑',
  preview: '预览',
  toc: '目录',
  closeToc: '关闭目录',
  help: '帮助',
  closeHelp: '关闭帮助',
  writeOnly: '仅编辑',
  exitWriteOnly: '退出仅编辑',
  previewOnly: '仅预览',
  exitPreviewOnly: '退出仅预览',
  fullscreen: '全屏',
  exitFullscreen: '退出全屏',
  source: '源代码',
  words: '字数',
  lines: '行数',
  sync: '同步滚动',
  top: '回到顶部',
  h1: '一级标题',
  h2: '二级标题',
  h3: '三级标题',
  h4: '四级标题',
  h5: '五级标题',
  h6: '六级标题',
  bold: '粗体',
  italic: '斜体',
  quote: '引用',
  link: '链接',
  image: '图片',
  code: '代码',
  codeBlock: '代码块',
  ul: '无序列表',
  ol: '有序列表',
  cheatsheet: '语法',
  shortcuts: '快捷键',
  headingText: '标题',
  boldText: '粗体文本',
  italicText: '斜体文本',
  quotedText: '引用文本',
  linkText: '链接描述',
  imageTitle: '图片描述',
  codeText: '代码',
  codeLang: '编程语言',
  olItem: '项目',
  ulItem: '项目'
}
