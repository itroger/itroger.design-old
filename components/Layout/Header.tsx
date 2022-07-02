import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { Menu } from '@headlessui/react'
import Logos from '@/components/Logos'
import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <div className="sticky z-50 top-0 flex justify-center items-center h-16 px-2 backdrop-saturate-180 backdrop-blur-5">
      <div className="relative flex justify-between items-center gap-4 max-w-7xl w-full">
        <Link href="/">
          <a className="md:z-50 flex items-center gap-2">
            <span className="w-8 h-8">
              <Logos.FaviconSvg />
            </span>
            <span className="text-zinc-900 dark:text-zinc-200 text-xl font-semibold">
              凡心所向
            </span>
          </a>
        </Link>
        <div className="md:absolute md:z-40 md:w-full flex justify-center items-center items-end gap-4">
          {menus.map(menu => (
            <Link key={menu.href} href={menu.href}>
              <a
                className={`cursor-pointer text-base ${
                  menu.href.includes(router.pathname.split('/')[1]) &&
                  router.pathname !== '/'
                    ? 'font-semibold'
                    : 'text-zinc-800 dark:text-zinc-300'
                }`}
              >
                {menu.text}
              </a>
            </Link>
          ))}
        </div>
        <div className="md:z-50 flex gap-4">
          {session ? (
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex w-full justify-center items-center gap-2 bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <Image
                  src={session.user.image}
                  width={24}
                  height={24}
                  alt="avatar"
                  className="rounded-full"
                />
                <span className="text-zinc-600 dark:text-zinc-400">
                  {session.user.name}
                </span>
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-900 rounded-md backdrop-saturate-180 backdrop-blur-5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => router.push(`/user/${session.user.id}`)}
                      className={`${
                        active
                          ? 'bg-zinc-100 dark:bg-zinc-800 dark:text-white'
                          : 'text-gray-900 dark:text-gray-200'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      我的主页
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => signOut()}
                      className={`${
                        active
                          ? 'bg-zinc-100 dark:bg-zinc-800 dark:text-white'
                          : 'text-gray-900 dark:text-gray-200'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      登出
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <>
              {router.pathname !== '/login' && (
                <Link href={`/login?callbackUrl=${router.pathname}`}>
                  <a className="cursor-pointer text-zinc-900 dark:text-zinc-200 text-base">
                    登录
                  </a>
                </Link>
              )}
            </>
          )}
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
