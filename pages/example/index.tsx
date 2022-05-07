import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { Example } from '@prisma/client'
import prisma from '@lib/prisma'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      examples: JSON.parse(JSON.stringify(await prisma.example.findMany()))
    }
  }
}

const Example: React.FC<{ examples: Example[] }> = props => {
  const { examples } = props
  return (
    <div>
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
