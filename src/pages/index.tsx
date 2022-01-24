import type {
  NextPage,
  GetStaticProps,
  // GetServerSideProps
} from 'next'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
import { Typography } from '@mui/material'

import Carousel from 'react-material-ui-carousel'

import {
  Hero,
  // Login, WebPlayback
} from 'components/modules'
import {
  RichCard,
  type Props as RichCardProps,
} from 'components/modules/RichCard'

import { fetchAPI } from './api/cms/api'

const cards: RichCardProps[] = [
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
    desc: (
      <>
        コンポーネント再設計中
        <br />
        preact+viteの軽量環境での構築
        <br />
        コミット粒度や開発環境はチーム開発を意識しました。
      </>
    ),
  },
  {
    type: 'article',
    title: 'APIを叩きまくってみる',
    captureSrc: 'try_api_01.jpg',
    captureAlt: '',
    href: '/contents/try-api/',
    desc: 'apiを叩く練習だ！',
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
  {
    type: 'portfolio',
    title: 'Furima',
    captureSrc: 'furima-logo.png',
    captureAlt: '',
    href: 'https://furima-31998.herokuapp.com/',
    stack: {
      framework: 'RubyonRails ',
      css: 'pure',
      js: 'pure',
      deploy: 'heroku',
    },
    gitHref: 'https://github.com/mono-sakakibara/furima_31998',
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

const Home: NextPage<Props> = ({ podCastsData }) => {
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
      <Container sx={{ py: 8 }} maxWidth='md'>
        <Box sx={{ minWidth: 275 }}>
          <Carousel
            autoPlay={false}
            indicators={true}
            navButtonsAlwaysInvisible={true}
            IndicatorIcon={[
              <>
                <Typography component='span' color='text.primary'>
                  昨日の一曲
                </Typography>
              </>,
              <>
                <Typography component='span' color='text.primary'>
                  今日の一曲
                </Typography>
              </>,
            ]}
            indicatorIconButtonProps={{
              style: {
                borderRadius: 'unset',
                margin: '0 30px',
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                backgroundColor: 'rgba(25, 118, 210, 0.04)',
              },
            }}
          >
            {/* {podCastsData.map((v, i) => (
              <>
                <iframe
                  key={i}
                  src={v.attributes.links}
                  width='100%'
                  height='232'
                  frameBorder='0'
                  allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                ></iframe>
              </>
            ))} */}
            <iframe
              src='https://open.spotify.com/embed/episode/0kNcejULVd0xzJFgzlWRHE?utm_source=generator'
              width='100%'
              height='232'
              frameBorder='0'
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            ></iframe>
            <iframe
              src='https://open.spotify.com/embed/show/0Xwe0k0GG5QoaqrDX86fTs?utm_source=generator'
              width='100%'
              height='232'
              frameBorder='0'
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            ></iframe>
          </Carousel>
        </Box>
      </Container>
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
        <Grid container spacing={{ xs: 1, sm: 1, md: 4 }}>
          {cards.map((card, i) =>
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
      {/* End Contents Area */}
    </>
  )
}

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

export const getStaticProps: GetStaticProps = async () => {
  const podCasts = await Promise.all([fetchAPI('/api/pod-casts')])
  const podCastsData = podCasts[0].data
  return {
    props: { podCastsData },
    revalidate: 1,
  }
}

export default Home
