import WithIpad from '@components/Layout/WithIpad'
import Header from '@components/Layout/Header'
import Footer from '@components/Layout/Footer'

const Layout = ({ children }) => {
  return (
    <WithIpad>
      <Header />
      <main className="max-w-6xl w-ful my-0 mx-auto px-2 md:px-0 py-4">
        {children}
      </main>
      <Footer />
    </WithIpad>
  )
}

export default Layout
