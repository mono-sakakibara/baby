import type { NextPage, GetServerSideProps } from 'next'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  // Header,
  Footer,
  Hero,
  RichCard,
  Login,
  WebPlayback,
} from 'components/modules'
import Box from '@mui/material/Box'

const cards = [
  {
    title: '友人のサイト制作',
    captureSrc: 'contents_01.png',
    captureAlt: '',
    productHref: 'https://k-takeuchi-test.vercel.app/',
    portfolio: {
      desc: {
        framework: 'Next.js',
        css: 'styled-components, tailwindCSS',
        js: 'Typescript',
        deploy: 'vercel',
      },
      gitHref: 'https://github.com/mono-sakakibara/k-takeuchi-renew/',
    },
  },
  {
    title: 'Furima',
    captureSrc: 'furima-logo.png',
    captureAlt: '',
    productHref: 'https://furima-31998.herokuapp.com/',
    portfolio: {
      desc: {
        framework: 'RubyonRails ',
        css: 'pure',
        js: 'pure',
        deploy: 'heroku',
      },
      gitHref: 'https://github.com/mono-sakakibara/furima_31998',
    },
    desc: (
      <>
        テックキャンプの卒業制作
        <br />
        スタイルは雛形を使用。amazon
        S3から外してしまったため、現在画像が投稿できません。（すみません。。）
        <br />
        Basic認証 ID: admin Pass: 2222
      </>
    ),
  },
]
const theme = createTheme()

type Props = {
  token: string
}

const Home: NextPage<Props> = ({ token }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Header /> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm' component={'section'}>
            <Hero />
          </Container>
        </Box>
        {/* End hero unit */}

        {/* Spotify Web Playback */}
        <Container sx={{ py: 8 }} maxWidth='md'>
          {token === '' ? <Login /> : <WebPlayback token={token} />}
        </Container>
        {/* End Spotify Web Playback */}

        {/* Contents Area */}
        <Container sx={{ py: 8 }} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={6}>
                <RichCard {...card} />
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* End Contents Area */}
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.req.cookies['spotify-token']) {
    const token: string = context.req.cookies['spotify-token']
    return {
      props: { token: token },
    }
  } else {
    return {
      props: { token: '' },
    }
  }
}

export default Home
