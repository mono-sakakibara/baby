import { Typography } from '@mui/material'
import { GetStaticProps } from 'next'
import Carousel from 'react-material-ui-carousel'

export const PodCastCarousel: React.FC = () => {
  return (
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
      {podCastsData.map((v: any, i: any) => (
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
      ))}
      {/* 静的な記述 */}
      {/* <iframe
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
      ></iframe> */}
    </Carousel>
  )
}

import { fetchAPI } from '../../pages/api/cms/api'

export const getStaticProps: GetStaticProps = async () => {
  const podCasts = await Promise.all([fetchAPI('/api/pod-casts')])
  const podCastsData = podCasts[0].data
  return {
    props: { podCastsData },
    revalidate: 1,
  }
}

const podCastsData: any = getStaticProps
