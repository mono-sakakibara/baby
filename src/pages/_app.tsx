import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Header, Footer } from 'components/modules'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>榊原太郎のポートフォリオ</title>
        <meta name='description' content='榊原太郎のポートフォリオです。' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Header /> */}
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
