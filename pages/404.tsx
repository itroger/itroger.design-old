import Link from 'next/link'

const Custom404 = () => {
  return (
    <div className="flex justify-center items-center w-full h-full gap-8">
      <div className="flex flex-col justify-center items-center gap-4 max-w-xl">
        <div className="text-center text-9xl text-gray-500">404</div>
        <h2 className="text-center">You have found a secret place.</h2>
        <p className="text-center">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </p>
        <Link href="/">
          <a>返回主页</a>
        </Link>
      </div>
    </div>
  )
}

export default Custom404
