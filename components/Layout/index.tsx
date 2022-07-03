import { useRouter } from 'next/router'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Feature from '@/components/Feature'

const Layout = ({ children }) => {
  const router = useRouter()

  const colors = [
    ['#ff0080', '#50e3c2', '#7928ca'],
    ['#50e3c2', '#7928ca', '#50e3c2']
  ]

  return (
    <div className="text-zinc-900 dark:text-zinc-100">
      <Header />
      <main
        className="relative flex justify-center"
        style={{ minHeight: 'calc(100vh - 112px)' }}
      >
        <Feature
          color={
            router.asPath === '/' || router.asPath.includes('example')
              ? colors[0]
              : colors[0]
          }
        />
        <div className="relative max-w-7xl w-full">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
