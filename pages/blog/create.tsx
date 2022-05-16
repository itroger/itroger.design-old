import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Prisma, Post } from '@prisma/client'
import { Box, Group, TextInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import axios from 'axios'
import FormData from 'form-data'

const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => null
})

const CreatePost = () => {
  const [value, setValue] = useState<string>('Code')

  const form = useForm<Prisma.PostCreateInput>({
    initialValues: {
      title: '',
      description: '',
      content: ''
    }
  })

  const handleSubmit = async (values: Prisma.PostCreateInput) => {
    const post = await axios.post<Post, Post, Prisma.PostCreateInput>(
      '/api/post',
      values
    )
    if (post) {
      showNotification({
        message: '创建博文成功'
      })
    }
  }

  const onImageUpload: (file: File) => Promise<string> = file => {
    console.log(file)
    return new Promise((resolve, reject) => {
      const formData = new FormData()
      formData.append('image', file)
      axios
        .post('/api/image', formData)
        .then(res => resolve(res.data.url))
        .catch(error => console.error('Error: ', error))
    })
  }

  return (
    <Box className="px-4">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="标题"
          placeholder="标题"
          {...form.getInputProps('title')}
        />
        <TextInput
          required
          label="描述"
          placeholder="描述"
          {...form.getInputProps('description')}
        />
        <TextInput
          required
          label="内容"
          placeholder="内容"
          {...form.getInputProps('content')}
        />
        <RichTextEditor
          value={value}
          onChange={setValue}
          onImageUpload={onImageUpload}
        />
        <Group mt="xl">
          <Button fullWidth type="submit" className="bg-primary">
            提交
          </Button>
        </Group>
      </form>
    </Box>
  )
}

export default CreatePost
