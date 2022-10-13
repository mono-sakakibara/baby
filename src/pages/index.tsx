import type { NextPage } from 'next'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { Hero } from 'components/modules'
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

const Home: NextPage<Props> = () => {
  return (
    <>
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
      {/* <Container sx={{ py: 4, px: 1 }} maxWidth='md'>
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
      </Container> */}
    </>
  )
}

export default Home

const privateCards: RichCardProps[] = [
  {
    type: 'portfolio',
    title: 'NOT A HOTEL',
    captureSrc: 'not-a-hotel.png',
    captureAlt: '',
    href: 'https://notahotel.com/nft',
    stack: {
      framework: 'Next.js',
      css: 'styled-components',
      js: 'TypeScript',
    },
    date: '2021/12~',
  },
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
    date: '2021/8~',
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
    date: '2021/7~',
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
    date: '2021/9~',
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
    date: '2021/5~',
  },
]

// const companyCards: RichCardProps[] = [
//   {
//     type: 'portfolio',
//     title: '放送大学様 リニューアル案件',
//     href: 'https://www.ouj.ac.jp/kamoku/',
//     stack: {
//       framework: 'Next.js',
//       css: 'TailwindCSS/ Linaria',
//       js: 'TypeScript',
//     },
//   },
//   {
//     type: 'portfolio',
//     title: 'ユニバーサルホーム様 LP作成',
//     href: 'https://www.universalhome.co.jp/lifestyle/newlifestyle/',
//     stack: {
//       css: 'TailwindCSS',
//     },
//   },
// ]
