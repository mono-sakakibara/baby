import { VFC } from 'react'
import Link from 'next/link'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export const Login: VFC = () => {
  return (
    <>
      <CardContent>
        <Typography sx={{ textAlign: 'center' }} variant='h4' component='h2'>
          自分の曲を流したい！
          <br />
          Spotifyアカウント（プレミアム）をお持ちの方。
          <br />
          スマホと連携して、PCから流せます。
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Link href='/api/auth/login'>
          <a className='btn-spotify'>Login with Spotify</a>
        </Link>
      </CardActions>
    </>
  )
}
