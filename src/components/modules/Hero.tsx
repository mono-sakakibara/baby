import { Typography } from '@mui/material'

export const Hero: React.FC = () => {
  return (
    <>
      <Typography
        component='h1'
        variant='h1'
        align='center'
        color='text.primary'
        gutterBottom
        sx={{ fontWeight: '900' }}
      >
        BABY
      </Typography>
    </>
  )
}
