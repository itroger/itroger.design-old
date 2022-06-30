import { NextApiHandler } from 'next'
import { prisma } from '@/lib/prisma'
import session from '@/utils/session'

const example: NextApiHandler = async (req, res) => {
  await session(req, res)

  try {
    switch (req.method) {
      case 'GET':
        const examples = await prisma.example.findMany()
        res.status(200).json(examples)
        break
      case 'POST':
        const example = await prisma.example.create({ data: req.body })
        res.status(201).json(example)
        break
    }
  } catch (e) {
    res.status(500).json({ message: `Something went wrong: ${e}` })
    prisma.$disconnect()
  }
}

export default example
