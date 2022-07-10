import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Post } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { remark } from 'remark'
import remarkMdx from 'remark-mdx'
import ReactMarkdown from 'react-markdown'
import { Sandpack } from '@codesandbox/sandpack-react'
import format from '@/utils/date'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark'
import { VFile } from 'vfile'
import '@codesandbox/sandpack-react/dist/index.css'

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

const PostDetail: React.FC<{ post: Post }> = props => {
  const [file, setFile] = useState<VFile>()
  const { post } = props

  useEffect(() => {
    setFile(remark().use(remarkMdx).processSync(post.content))
  }, [post.content])

  return (
    <div className="flex justify-center h-full md:p-2">
      <div className="flex flex-col gap-4  max-w-5xl w-full p-4 md:px-8 md:py-8 bg-white md:bg-amber-50 dark:bg-black dark:md:bg-zinc-900 rounded-xl">
        <h2 className="text-2xl text-center font-semibold">{post.title}</h2>
        <div className="flex justify-center gap-4 text-gray-600 dark:text-gray-400">
          <span>{post.username}</span>
          <span>{`编辑于 ${format(post.updatedAt, true)}`}</span>
        </div>
        {file && (
          <ReactMarkdown
            className="markdown-body"
            components={{
              code: ({ node, inline, className, children, ...props }) => {
                if (className?.includes('sandpack')) {
                  return (
                    <Sandpack
                      template="react-ts"
                      theme="dark"
                      files={{
                        // @ts-ignore
                        '/App.tsx': children[0]
                      }}
                    />
                  )
                } else {
                  const match = /language-(\w+)/.exec(className || '')

                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      style={dark}
                      language={className?.split('-')[1]}
                      PreTag="div"
                    >
                      {/* @ts-ignore */}
                      {children[0]}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }
            }}
          >
            {String(file.value)}
          </ReactMarkdown>
        )}
      </div>
    </div>
  )
}

export default PostDetail
