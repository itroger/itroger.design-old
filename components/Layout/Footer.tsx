import { Container, Text } from '@mantine/core'
import Logos from '@components/Logos'
import DarkMode from '@components/Layout/DarkMode'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-12 border-t border-zinc-300 dark:border-zinc-500">
      <Container className="flex justify-between max-w-6xl w-full">
        <div className="flex items-end gap-4">
          <Logos.FaviconSvg />
          <Text size="xs" color="dimmed">
            © 2022 Designed by itroger
          </Text>
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
      </Container>
    </footer>
  )
}

export default Footer
