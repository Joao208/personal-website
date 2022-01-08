import Head from 'next/head'
import { RenderHead } from './renderHead'

export const DefaultHead = () => {
  return (
    <Head>
      <title>João Augusto</title>

      <RenderHead
        titleComplete="João Augusto - Software Engineer"
        image="https://joaobarros.s3.us-east-2.amazonaws.com/Component+1.png"
        description="Hi, I'm João! Join my Blog to see my tutorials and my stories"
      />
    </Head>
  )
}
