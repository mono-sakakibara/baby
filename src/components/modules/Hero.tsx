import { Typography, Button } from '@mui/material'
import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub'

import Image from 'next/image'

export const Hero: React.FC = () => {
  return (
    <>
      <Box>
        <Typography
          component='h1'
          variant='h1'
          align='center'
          color='text.primary'
          sx={{ fontWeight: '900' }}
        >
          BABY
        </Typography>
        <Button
          size='small'
          href='https://github.com/mono-sakakibara/baby'
          target='_blank'
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <GitHubIcon />
          <Typography sx={{ marginLeft: '10px' }}>repository</Typography>
        </Button>
      </Box>
    </>
  )
}
