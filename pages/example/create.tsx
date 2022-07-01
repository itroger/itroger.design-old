import { Prisma, Example } from '@prisma/client'
import axios from 'axios'

const ExampleCreate = () => {
  const handleSubmit = async (values: Prisma.ExampleCreateInput) => {
    const post = await axios.post<Example, Example, Prisma.ExampleCreateInput>(
      '/api/example',
      values
    )
  }

  return (
    <div className="flex justify-center p-4">
      {/*<Form className="flex flex-col max-w-xl w-full">*/}
      {/*  <Form.Item*/}
      {/*    name="category"*/}
      {/*    rules={[{ required: true, message: '请输入类型' }]}*/}
      {/*  >*/}
      {/*    <Input placeholder="类型" />*/}
      {/*  </Form.Item>*/}
      {/*  <Form.Item*/}
      {/*    name="text"*/}
      {/*    rules={[{ required: true, message: '请输入名称' }]}*/}
      {/*  >*/}
      {/*    <Input placeholder="名称" />*/}
      {/*  </Form.Item>*/}
      {/*  <Form.Item*/}
      {/*    name="href"*/}
      {/*    rules={[{ required: true, message: '请输入页面路由' }]}*/}
      {/*  >*/}
      {/*    <Input placeholder="页面路由" />*/}
      {/*  </Form.Item>*/}
      {/*  <Form.Item*/}
      {/*    name="src"*/}
      {/*    rules={[{ required: true, message: '请输入链接地址' }]}*/}
      {/*  >*/}
      {/*    <Input placeholder="链接地址" />*/}
      {/*  </Form.Item>*/}
      {/*  <Form.Item>*/}
      {/*    <Button type="primary" htmlType="submit" className="w-full">*/}
      {/*      创建*/}
      {/*    </Button>*/}
      {/*  </Form.Item>*/}
      {/*</Form>*/}
    </div>
  )
}

export default ExampleCreate
