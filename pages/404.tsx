import Link from 'next/link'
import { Container, Title, Text, Group, Button } from '@mantine/core'

const Custom404 = () => {
  return (
    <Container className="flex flex-col justify-center items-center h-full gap-8 max-w-xl">
      <div className="text-center text-9xl text-gray-500">404</div>
      <Title className="text-center">You have found a secret place.</Title>
      <Text color="dimmed" size="lg" align="center" className="">
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group position="center">
        <Button variant="subtle" size="md">
          <Link href="/">返回主页</Link>
        </Button>
      </Group>
    </Container>
  )
}

export default Custom404
