import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>榊原太郎のポートフォリオ</title>
        <meta name='description' content='榊原太郎のポートフォリオです。' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
