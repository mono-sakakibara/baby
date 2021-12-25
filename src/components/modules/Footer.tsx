import { Box } from '@mui/material'
import { Copyright } from 'components/modules'

export const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
      <Copyright />
    </Box>
  )
}
