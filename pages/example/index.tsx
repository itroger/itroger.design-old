import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { Example } from '@prisma/client'
import { prisma } from '@/lib/prisma'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      examples: JSON.parse(JSON.stringify(await prisma.example.findMany()))
    }
  }
}

const Example: React.FC<{ examples: Example[] }> = props => {
  const { examples } = props

  const { data: session } = useSession()

  return (
    <div className="flex flex-col gap-4 p-4">
      {session && (
        <Link href="/example/create">
          <a className="py-2 font-semibold text-center text-white dark:text-black hover:text-black hover:dark:text-white bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white hover:bg-white hover:dark:bg-black rounded">
            新增示例
          </a>
        </Link>
      )}
      {examples.map(example => (
        <div key={example.text} className="p-4 border">
          <Link href={`/example/${example.category}/${example.href}`}>
            <a>{example.text}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Example
