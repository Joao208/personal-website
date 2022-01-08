import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="keywords" content="Full Stack, Dev, Programador, Backend, Web, Frontend" />
        <meta name="author" content="João Augusto (joao208)" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
