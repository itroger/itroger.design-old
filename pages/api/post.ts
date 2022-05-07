import { NextApiHandler } from 'next'
import prisma from '@lib/prisma'

const post: NextApiHandler = async (req, res) => {
  try {
    switch (req.method) {
      case 'GET':
        const posts = await prisma.post.findMany()
        console.log(posts)
        res.status(200).json(posts)
        break
      case 'POST':
        const post = await prisma.post.create({ data: req.body })
        res.status(201).json(post)
        break
    }
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' })
    prisma.$disconnect()
  }
}

export default post
