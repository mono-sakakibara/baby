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

interface PortfolioProps {
  title: string | JSX.Element
  captureSrc: string
  captureAlt?: string
  productHref: string
  portfolio: {
    desc: {
      framework: string
      css: string
      js: string
      deploy: string
    }
    gitHref?: string
  }
  desc?: string | JSX.Element
}
interface ServiceProps {
  title: string | JSX.Element
  captureSrc: string
  captureAlt?: string
  productHref: string
  portfolio?: undefined
  desc: string | JSX.Element
}

type Props = PortfolioProps | ServiceProps

export const RichCard: React.FC<Props> = ({
  title,
  captureSrc,
  captureAlt,
  productHref,
  portfolio,
  desc,
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
        sx={{ height: '300px', objectFit: 'contain' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        {desc && <Typography variant='subtitle1'>{desc}</Typography>}
        <div style={{ marginTop: '10px' }}>
          {portfolio &&
            Object.values(portfolio.desc).map((v, i) => (
              <Typography key={i} sx={{ display: 'flex' }}>
                <span style={{ flexShrink: '0', marginRight: '5px' }}>
                  {Object.keys(portfolio.desc)[i] == 'framework'
                    ? 'Framework:'
                    : Object.keys(portfolio.desc)[i] == 'css'
                    ? 'Css:'
                    : Object.keys(portfolio.desc)[i] == 'js'
                    ? 'Js:'
                    : Object.keys(portfolio.desc)[i] == 'deploy'
                    ? 'Deploy:'
                    : null}
                </span>
                <span>{v}</span>
              </Typography>
            ))}
        </div>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          href={productHref}
          target='_blank'
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <OpenInNewIcon />
          <Typography sx={{ marginLeft: '10px' }}>view</Typography>
        </Button>
        {portfolio && portfolio?.gitHref && (
          <Button
            size='small'
            href={portfolio.gitHref}
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
