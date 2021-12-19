import type { NextPage, GetServerSideProps } from 'next'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  Header,
  Footer,
  Hero,
  RichCard,
  Login,
  WebPlayback,
} from 'components/modules'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const theme = createTheme()

type Props = {
  token: string
}

const Home: NextPage<Props> = ({ token }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        {/* Spotify Web Playback */}
        {token === '' ? <Login /> : <WebPlayback token={token} />}
        {/* End Spotify Web Playback */}

        {/* Hero unit */}
        <Hero />
        {/* End hero unit */}

        {/* Contents Area */}
        <Container sx={{ py: 8 }} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <RichCard />
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
