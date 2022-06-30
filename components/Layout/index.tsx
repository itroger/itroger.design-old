import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Feature from '@/components/Feature'

const Layout = ({ children }) => {
  return (
    <div className="text-zinc-900 dark:text-zinc-100">
      <Header />
      <main
        className="relative flex justify-center p-2"
        style={{ minHeight: 'calc(100vh - 112px)' }}
      >
        <Feature />
        <div className="relative max-w-6xl w-full">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
