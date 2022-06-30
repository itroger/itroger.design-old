import Logos from '@/components/Logos'
import DarkMode from '@/components/Layout/DarkMode'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-12 text-zinc-700 dark:text-zinc-400 bg-fa dark:bg-111 border-t border-zinc-300 dark:border-zinc-800 px-2">
      <div className="flex justify-between max-w-6xl w-full">
        <div className="flex items-end gap-4">
          <Link href="/">
            <a className="w-6 h-6">
              <Logos.FaviconSvg />
            </a>
          </Link>
          <span>© 2022 Designed by itroger</span>
        </div>
        <div className="flex gap-2">
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
    </footer>
  )
}

export default Footer
