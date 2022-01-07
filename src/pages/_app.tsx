import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>teste</title>
        <meta name="description" content="" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <link rel="alternate" href="" hrefLang="pt-br" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:url" content="URL" />
        <meta property="og:title" content="TÍTULO" />
        <meta property="og:image" content="https://joaobarros.s3.us-east-2.amazonaws.com/Component+1.png" />
        <meta property="og:description" content="DESCRIÇÃO" />
        <meta name="theme-color" content="#fe2813" />
        <meta property="business:contact_data:country_name" content="PAÍS" />
        <meta property="business:contact_data:website" content="URL" />
        <meta property="business:contact_data:region" content="SP" />
        <meta property="business:contact_data:email" content="EMAIL" />
        <meta property="business:contact_data:phone_number" content="TEL" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="DESCRIÇÃO" />
        <meta name="twitter:title" content="TITULO" />
        <meta name="twitter:image" content="https://joaobarros.s3.us-east-2.amazonaws.com/Component+1.png" />
        <meta name="geo.placename" content="LOCALIZAÇÃO" />
        <meta name="geo.region" content="BR" />
        <meta name="description" content="DESCRIÇÃO" />
        <link rel="canonical" href="URL" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
