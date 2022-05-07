import React, { useEffect, useState } from 'react'
import Logos from '@components/Logos'

const DarkMode = () => {
  const [dark, setDark] = useState<boolean>()

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [])

  useEffect(() => {
    if (dark) {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    } else {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  if (dark) {
    return <Logos.LightSvg onClick={() => setDark(false)} />
  } else {
    return <Logos.DarkSvg onClick={() => setDark(true)} />
  }
}

export default DarkMode
