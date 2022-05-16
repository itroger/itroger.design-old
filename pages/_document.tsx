import { Html, Head, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next'

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document

Document.getInitialProps = createGetInitialProps()
