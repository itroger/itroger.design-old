import { NextApiHandler } from 'next'
import { getSession } from 'next-auth/react'

const session: NextApiHandler = async (req, res) => {
  const session = await getSession({ req })

  return new Promise((resolve, reject) => {
    if (req.method !== 'GET' && !session) {
      res.status(403).json({ message: '未登录' })
      reject({
        status: 'unAuthenticated'
      })
    }
    resolve({ status: 'authenticated' })
  })
}

export default session
