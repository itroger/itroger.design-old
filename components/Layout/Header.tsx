import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { Container, Avatar, Group, Menu, Text } from '@mantine/core'
import Logos from '@components/Logos'

const Header = () => {
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <div className="sticky top-0 flex justify-center items-center h-12 bg-zinc-50 dark:bg-zinc-900">
      <Container className="flex gap-4 max-w-6xl w-full">
        <Link href="/">
          <a>
            <Logos.FaviconSvg />
          </a>
        </Link>
        <div className="flex-1 flex items-end gap-4">
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
          {session ? (
            <Menu
              control={
                <Group>
                  <Avatar src={session.user.image} size="sm" radius="xl" />
                  <Text>{session.user.name}</Text>
                </Group>
              }
            >
              <Menu.Item onClick={() => signOut()}>登出</Menu.Item>
            </Menu>
          ) : (
            <>
              {router.pathname !== '/login' && (
                <Link href={`/login?callbackUrl=${router.pathname}`}>
                  <a className="cursor-pointer">登录</a>
                </Link>
              )}
            </>
          )}
        </div>
      </Container>
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
