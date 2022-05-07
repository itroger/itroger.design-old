import React from 'react'
import DarkMode from '@components/Layout/DarkMode'
import Link from 'next/link'
import Logos from '@components/Logos'

const Header = () => {
  return (
    <div className="sticky top-0 flex justify-center items-center h-12 px-2 bg-zinc-50 dark:bg-zinc-900">
      <div className="flex justify-between max-w-6xl w-full">
        <Link href="/">
          <a>
            <Logos.FaviconSvg />
          </a>
        </Link>
        <div className="flex items-end gap-4">
          <Link href="/blog">
            <a>博客</a>
          </Link>
          <Link href="/about">
            <a>关于</a>
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/itroger/itroger.design"
            target="_blank"
            rel="noreferrer"
          >
            <Logos.GithubSvg />
          </a>
          <DarkMode />
        </div>
      </div>
    </div>
  )
}

export default Header
