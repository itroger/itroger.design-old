import React from 'react'
import { useSession } from 'next-auth/react'

const Auth = ({ children }) => {
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return (
      <div className="flex flex-col justify-center gap-4 px-8 h-full"></div>
    )
  }

  return children
}

export default Auth
