import { useRouter } from 'next/router'
import Header from '@components/Layout/Header'
import Footer from '@components/Layout/Footer'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <div className="sm:flex justify-center items-center w-screen h-screen">
      <div
        style={{ maxWidth: 1200 }}
        className="sm:w-5/6 md:w-full max-h-screen"
      >
        <div className="relative w-full sm:pt-iphone-content md:pt-ipad-content">
          <div className="sm:bg-iphone md:bg-ipad box-content sm:p-iphone md:p-ipad absolute -top-0 left-0 right-0 bottom-0 bg-contain bg-no-repeat text-black dark:text-zinc-500">
            <main className="flex flex-col w-full h-screen sm:h-full sm:overflow-hidden md:rounded-md">
              <Header />
              <div className="flex-1 overflow-y-auto max-w-6xl w-full">
                {children}
              </div>
              {router.asPath === '/' && <Footer />}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
