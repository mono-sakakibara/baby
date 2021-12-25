import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material'
import Card from '@mui/material/Card'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Image from 'next/image'

interface Props {
  captureSrc: string
  captureAlt?: string
  title: string | JSX.Element
  desc: string | JSX.Element
  hpHref: string
  gitHref?: string
}

export const RichCard: React.FC<Props> = ({
  captureSrc,
  captureAlt,
  title,
  desc,
  hpHref,
  gitHref,
}) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component='img'
        image={captureSrc}
        alt={captureAlt}
        sx={{ maxHeight: '300px', objectFit: 'contain' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography>{desc}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          href={hpHref}
          target='_blank'
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <OpenInNewIcon />
          <Typography sx={{ marginLeft: '10px' }}>view</Typography>
        </Button>
        {gitHref && (
          <Button
            size='small'
            href={gitHref}
            target='_blank'
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Image
              src='/GitHub-Mark-32px.png'
              alt=''
              width='24px'
              height='24px'
              loading='lazy'
            />
            <Typography sx={{ marginLeft: '10px' }}>repository</Typography>
          </Button>
        )}
      </CardActions>
    </Card>
  )
}
