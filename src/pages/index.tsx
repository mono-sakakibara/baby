import type {
  NextPage,
  // GetStaticProps,
  GetServerSideProps,
} from 'next'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import { Typography } from '@mui/material'

import {
  Hero,
  // Login, WebPlayback
} from 'components/modules'
import {
  RichCard,
  type Props as RichCardProps,
} from 'components/modules/RichCard'
import { Typography } from '@mui/material'

type Props = {
  token: string
  podCastsData: {
    id: string
    attributes: {
      links: string
      createdAt: string
      updatedAt: string
      publishedAt: string
    }
  }[]
}

const Home: NextPage<Props> = (
  {
    // token
  },
) => {
  return (
    <>
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

      {/* anchor */}
      {/* <Container sx={{ py: 8 }} maxWidth='md'>
        <Box sx={{ minWidth: 275 }}>
          <Carousel/>
        </Box>
      </Container> */}
      {/* End anchor */}

      {/* Spotify Web Playback */}
      {/* <Container sx={{ py: 4, px: 1 }} maxWidth='md'>
        <Box sx={{ minWidth: 275 }}>
          <Card
            sx={{ display: 'grid', placeItems: 'center', minHeight: '300px' }}
          >
            {token === '' ? <Login /> : <WebPlayback token={token} />}
          </Card>
        </Box>
      </Container> */}
      {/* End Spotify Web Playback */}

      {/* Contents Area */}
      <Container sx={{ py: 4, px: 1 }} maxWidth='md'>
        <Typography
          component='h2'
          variant='h3'
          align='center'
          color='text.primary'
          sx={{ fontWeight: '600' }}
          gutterBottom
        >
          個人制作
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 1, md: 4 }}>
          {privateCards.map((card, i) =>
            i % 3 == 0 || i == 0 ? (
              <Grid item key={i} xs={12} sm={12} md={12}>
                <RichCard {...card} />
              </Grid>
            ) : (
              <Grid item key={i} xs={12} sm={12} md={6}>
                <RichCard {...card} />
              </Grid>
            ),
          )}
        </Grid>
      </Container>
      <Container sx={{ py: 4, px: 1 }} maxWidth='md'>
        <Typography
          component='h2'
          variant='h3'
          align='center'
          color='text.primary'
          sx={{ fontWeight: '600' }}
          gutterBottom
        >
          会社制作
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 1, md: 4 }}>
          {companyCards.map((card, i) => (
            <Grid item key={i} xs={12} sm={12} md={6}>
              <RichCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* End Contents Area */}
    </>
  )
}

// Spotify Web Playback のトークン取得
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   if (context.req.cookies['spotify-token']) {
//     const token: string = context.req.cookies['spotify-token']
//     return {
//       props: { token: token },
//     }
//   } else {
//     return {
//       props: { token: '' },
//     }
//   }
// }

export default Home

const privateCards: RichCardProps[] = [
  {
    type: 'portfolio',
    title: 'toletta LP作成',
    captureSrc: 'toletta.png',
    captureAlt: '',
    href: 'https://jp.tolettacat.com/pages/about-app',
    stack: {
      framework: 'Astro.js',
      css: 'Sass',
      js: 'JavaScript/ Gsap',
    },
  },
  {
    type: 'portfolio',
    title: '犬猫生活 LP作成',
    captureSrc: 'inuneko.png',
    captureAlt: '',
    href: 'https://inuneko-seikatsu.co.jp/lp?u=products_AT_G',
    stack: {
      css: 'Sass',
      js: 'JavaScript/ Gsap',
    },
  },
  {
    type: 'portfolio',
    title: '都市別人口グラフ SPA',
    captureSrc: 'population.jpg',
    captureAlt: '',
    href: 'https://prefectural-population-graph.vercel.app/',
    stack: {
      framework: 'Preact + vite',
      css: 'styled-components',
      js: 'typescript',
      deploy: 'vercel',
    },
    gitHref: 'https://github.com/mono-sakakibara/prefectural-population-graph',
  },
  {
    type: 'portfolio',
    title: '友人のサイト制作',
    captureSrc: 'contents_01.png',
    captureAlt: '',
    href: 'https://k-takeuchi-test.vercel.app/',
    stack: {
      framework: 'Next.js',
      css: 'styled-components, tailwindCSS',
      js: 'Typescript',
      deploy: 'vercel',
    },
    gitHref: 'https://github.com/mono-sakakibara/k-takeuchi-renew/',
  },
]

const companyCards: RichCardProps[] = [
  {
    type: 'portfolio',
    title: '放送大学様 リニューアル案件',
    href: 'https://www.ouj.ac.jp/kamoku/',
    stack: {
      framework: 'Next.js',
      css: 'TailwindCSS/ Linaria',
      js: 'TypeScript',
    },
  },
  {
    type: 'portfolio',
    title: 'ユニバーサルホーム様 LP作成',
    href: 'https://www.universalhome.co.jp/lifestyle/newlifestyle/',
    stack: {
      css: 'TailwindCSS',
    },
  },
]
