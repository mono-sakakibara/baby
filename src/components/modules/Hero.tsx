import { Typography, Button } from '@mui/material'
import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub'

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
          Portfolio
        </Typography>
      </Box>
    </>
  )
}
