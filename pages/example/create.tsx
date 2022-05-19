import { Prisma, Example } from '@prisma/client'
import { Box, Group, TextInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import axios from 'axios'

const ExampleCreate = () => {
  const form = useForm<Prisma.ExampleCreateInput>({
    initialValues: {
      category: '',
      text: '',
      href: '',
      src: ''
    }
  })

  const handleSubmit = async (values: Prisma.ExampleCreateInput) => {
    const post = await axios.post<Example, Example, Prisma.ExampleCreateInput>(
      '/api/example',
      values
    )
    if (post) {
      showNotification({
        message: '创建例子成功'
      })
    }
  }

  return (
    <Box className="px-4">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="类型"
          placeholder="类型"
          {...form.getInputProps('category')}
        />
        <TextInput
          required
          label="名称"
          placeholder="名称"
          {...form.getInputProps('text')}
        />
        <TextInput
          required
          label="页面路由"
          placeholder="页面路由"
          {...form.getInputProps('href')}
        />
        <TextInput
          required
          label="链接地址"
          placeholder="链接地址"
          {...form.getInputProps('src')}
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

export default ExampleCreate
