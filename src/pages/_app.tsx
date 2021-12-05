import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="keywords" content="Full Stack, Dev, Programador, Backend, Web, Frontend" />
        <meta name="author" content="João Augusto (joao208)" />

        <title>João Augusto</title>

        <meta property="og:title" content="João Augusto" />
        <meta
          property="og:image"
          content="https://bk-personal-website.onrender.com/files/2ef40620657629387eece3862dbca8f1-Component%202.png"
        />
        <meta property="og:description" content="Hi! I'm João, come talking with me..." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
