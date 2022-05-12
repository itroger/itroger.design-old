const WithIpad = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div style={{ width: 1000 }}>
        <div className="relative w-full" style={{ paddingTop: '77%' }}>
          <div
            className="absolute -top-0 left-0 right-0 bottom-0 background text-black dark:text-zinc-500"
            style={{
              paddingTop: 40,
              paddingRight: 43,
              paddingLeft: 38,
              paddingBottom: 41
            }}
          >
            <div
              className="w-full h-full overflow-hidden"
              style={{ borderRadius: 14 }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithIpad
