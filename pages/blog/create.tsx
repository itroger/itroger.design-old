import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const CreatePost = () => {
  const [imageUrl, setImageUrl] = useState<string>()

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<Prisma.PostCreateInput>()

  const onSubmit = handleSubmit(async data => {
    await axios.post('/api/post', data)
  })

  const upload = async image => {
    if (!image) return

    let toastId

    try {
      const { data } = await axios.post('/api/image', { image })
      setImageUrl(data?.url)
    } catch (e) {
      setImageUrl('')
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl w-full p-4 border rounded-md">
        <h2 className="text-center mb-2">创建博文</h2>
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
          <label className="text-zinc-500 text-sm">Title</label>
          <input
            placeholder="请输入标题"
            className={`border h-10 px-2 rounded-md ${
              errors?.title?.type === 'required' && 'placeholder:text-red-500'
            }`}
            {...register('title', { required: true })}
          />
          <label className="text-zinc-500 text-sm">Description</label>
          <input
            placeholder="请输入摘要"
            className={`border h-10 px-2 rounded-md ${
              errors?.description?.type === 'required' &&
              'placeholder:text-red-500'
            }`}
            {...register('description', { required: true })}
          />
          <label className="text-zinc-500 text-sm">Image</label>
          <input
            placeholder="请上传图片"
            type="file"
            onChange={e => console.log(e)}
            className="border h-10 px-2 rounded-md"
            {...register('image')}
          />
          <label className="text-zinc-500 text-sm">Content</label>
          <input
            placeholder="请输入正文"
            className={`border h-10 px-2 rounded-md ${
              errors?.content?.type === 'required' && 'placeholder:text-red-500'
            }`}
            {...register('content', { required: true })}
          />
          <input
            type="submit"
            className="h-10 border rounded-md bg-primary text-zinc-50 cursor-pointer"
          />
        </form>
      </div>
    </div>
  )
}

export default CreatePost
