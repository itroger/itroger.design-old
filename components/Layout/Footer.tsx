import React from 'react'
import Link from 'next/link'
import Logos from '@/components/Logos'

declare global {
  interface Window {
    __theme: string
    __setPreferredTheme: (theme: string) => void
  }
}

const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-12 text-zinc-700 dark:text-zinc-400 bg-fa dark:bg-111 border-t border-zinc-300 dark:border-zinc-800 px-2">
      <div className="flex justify-between max-w-7xl w-full">
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
          <a className="hidden dark:block">
            <Logos.LightSvg
              onClick={() => window.__setPreferredTheme('light')}
            />
          </a>
          <a className="block dark:hidden">
            <Logos.DarkSvg onClick={() => window.__setPreferredTheme('dark')} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
