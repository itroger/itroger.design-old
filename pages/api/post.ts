import { NextApiHandler } from 'next'
import prisma from '@lib/prisma'
import { Post } from '@prisma/client'
import session from '@utils/session'

const post: NextApiHandler = async (req, res) => {
  await session(req, res)

  try {
    let post: Post

    switch (req.method) {
      case 'GET':
        const posts = await prisma.post.findMany()
        res.status(200).json(posts)
        break
      case 'POST':
        post = await prisma.post.create({ data: req.body })
        res.status(201).json(post)
        break
      case 'PUT':
        post = await prisma.post.update({
          where: { id: String(req.query.id) },
          data: req.body
        })
        res.status(201).json(post)
        break
      case 'DELETE':
        post = await prisma.post.delete({
          where: { id: String(req.query.id) }
        })
        res.status(204).json(post)
        break
    }
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong: ' + e })
    prisma.$disconnect()
  }
}

export default post
