import { Prisma, Example } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const ExampleCreate = () => {
  const { data: session } = useSession()

  const [example, setExample] = useState<Prisma.ExampleUncheckedCreateInput>()

  useEffect(() => {
    if (session)
      setExample({
        category: '',
        text: '',
        href: '',
        src: '',
        userId: Number(session.user.id),
        username: session.user.name
      })
  }, [session])

  const handleSubmit = async () => {
    const post = await axios.post<
      Example,
      Example,
      Prisma.ExampleUncheckedCreateInput
    >('/api/example', example)
  }

  return (
    <div className="flex justify-center items-center h-full p-4">
      <form className="flex flex-col gap-8 max-w-xl w-full bg-white dark:bg-black p-8 rounded-xl shadow">
        <input
          placeholder="类型"
          onChange={e =>
            setExample(prevState => ({
              ...prevState,
              category: e.target.value
            }))
          }
          className="appearance-none rounded relative block w-full px-3 py-2 text-black dark:text-white bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-600 placeholder-gray-500 dark:placeholder-zinc-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-black dark:focus:border-white focus:z-10 sm:text-sm"
        />
        <input
          placeholder="名称"
          onChange={e =>
            setExample(prevState => ({ ...prevState, text: e.target.value }))
          }
          className="appearance-none rounded relative block w-full px-3 py-2 text-black dark:text-white bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-600 placeholder-gray-500 dark:placeholder-zinc-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-black dark:focus:border-white focus:z-10 sm:text-sm"
        />
        <input
          placeholder="页面路由"
          onChange={e =>
            setExample(prevState => ({ ...prevState, href: e.target.value }))
          }
          className="appearance-none rounded relative block w-full px-3 py-2 text-black dark:text-white bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-600 placeholder-gray-500 dark:placeholder-zinc-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-black dark:focus:border-white focus:z-10 sm:text-sm"
        />
        <input
          placeholder="链接地址"
          onChange={e =>
            setExample(prevState => ({ ...prevState, src: e.target.value }))
          }
          className="appearance-none rounded relative block w-full px-3 py-2 text-black dark:text-white bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-600 placeholder-gray-500 dark:placeholder-zinc-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-black dark:focus:border-white focus:z-10 sm:text-sm"
        />
        <input
          type="submit"
          value="创建"
          className="py-2 font-semibold text-center text-white dark:text-black hover:text-black hover:dark:text-white bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white hover:bg-white hover:dark:bg-black rounded"
        />
      </form>
    </div>
  )
}

export default ExampleCreate
