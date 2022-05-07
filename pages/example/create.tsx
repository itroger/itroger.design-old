import { Prisma } from '@prisma/client'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const CreateExample = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<Prisma.ExampleCreateInput>()

  const onSubmit = handleSubmit(async data => {
    await axios.post('/api/example', data)
  })

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl w-full p-4 border rounded-md">
        <h2 className="text-center mb-2">创建示例</h2>
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
          <label className="text-zinc-500 text-sm">类型</label>
          <input
            placeholder="请输入类型"
            className={`border h-10 px-2 rounded-md ${
              errors?.category?.type === 'required' &&
              'placeholder:text-red-500'
            }`}
            {...register('category', { required: true })}
          />
          <label className="text-zinc-500 text-sm">名称</label>
          <input
            placeholder="请输入名称"
            className={`border h-10 px-2 rounded-md ${
              errors?.text?.type === 'required' && 'placeholder:text-red-500'
            }`}
            {...register('text', { required: true })}
          />
          <label className="text-zinc-500 text-sm">页面路由</label>
          <input
            placeholder="请输入页面路由"
            className={`border h-10 px-2 rounded-md ${
              errors?.href?.type === 'required' && 'placeholder:text-red-500'
            }`}
            {...register('href', { required: true })}
          />
          <label className="text-zinc-500 text-sm">嵌入地址</label>
          <input
            placeholder="请输入嵌入地址"
            className={`border h-10 px-2 rounded-md ${
              errors?.src?.type === 'required' && 'placeholder:text-red-500'
            }`}
            {...register('src', { required: true })}
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

export default CreateExample
