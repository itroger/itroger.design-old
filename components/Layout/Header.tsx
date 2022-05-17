import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DarkMode from '@components/Layout/DarkMode'
import Logos from '@components/Logos'

const Header = () => {
  const router = useRouter()

  return (
    <div className="sticky top-0 flex justify-center items-center h-12 px-2 bg-zinc-50 dark:bg-zinc-900">
      <div className="flex justify-between max-w-6xl w-full">
        <Link href="/">
          <a>
            <Logos.FaviconSvg />
          </a>
        </Link>
        <div className="flex items-end gap-4">
          {menus.map(menu => (
            <Link key={menu.href} href={menu.href}>
              <a
                className={`${
                  menu.href.includes(router.pathname.split('/')[1]) &&
                  router.pathname !== '/' &&
                  'font-semibold text-zinc-800 dark:text-zinc-300'
                }`}
              >
                {menu.text}
              </a>
            </Link>
          ))}
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

type Menu = {
  text: string
  href: string
}

const menus: Menu[] = [
  {
    text: '博客',
    href: '/post'
  },
  {
    text: '示例',
    href: '/example'
  },
  {
    text: '关于',
    href: '/about'
  }
]
