import { NextApiHandler } from 'next'
import session from '@utils/session'
import { supabase } from '@lib/supabase'
import { nanoid } from 'nanoid'
import { decode } from 'base64-arraybuffer'

const image: NextApiHandler = async (req, res) => {
  await session(req, res)

  switch (req.method) {
    case 'POST':
      const { file } = req.body

      if (!file) {
        return res.status(500).json({ message: 'No image provided' })
      }

      try {
        const contentType = file.match(/data:(.*);base64/)?.[1]
        const base64FileData = file.split('base64,')?.[1]

        if (!contentType || !base64FileData) {
          return res.status(500).json({ message: 'Image data not valid' })
        }

        const fileExt = contentType.split('/')[1]
        const fileName = nanoid()
        const filePath = `${fileName}.${fileExt}`
        const { data, error: uploadErr } = await supabase.storage
          .from(process.env.SUPABASE_BUCKET)
          .upload(filePath, decode(base64FileData), {
            contentType,
            upsert: true
          })

        if (uploadErr) {
          console.error(`Unable to upload image to storage: ${uploadErr}`)
        }

        res.status(201).json({
          url: `${process.env.SUPABASE_URL.replace(
            '.co',
            '.in'
          )}/storage/v1/object/public/${data.Key}`
        })
      } catch (e) {
        res.status(500).json({ message: `Something went wrong: ${e}` })
      }
      break
  }
}

export default image
