import Header from '@components/Layout/Header'
import Footer from '@components/Layout/Footer'

const Layout = ({ children }) => {
  return (
    <div className="text-black dark:text-zinc-500">
      <Header />
      <main
        className="max-w-6xl w-ful my-0 mx-auto px-2 md:px-0 py-4"
        style={{ minHeight: 'calc(100vh - 48px)' }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
