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
  type: 'portfolio'
  title: string | JSX.Element
  captureSrc: string
  captureAlt?: string
  href: string
  stack: {
    framework: string
    css: string
    js: string
    deploy: string
  }
  gitHref?: string
  desc?: string | JSX.Element
}
interface ServiceProps {
  type: 'service'
  title: string | JSX.Element
  captureSrc: string
  captureAlt?: string
  href: string
  stack?: undefined
  gitHref?: undefined
  ArticleProps?: undefined
  desc: string | JSX.Element
}
interface ArticleProps {
  type: 'article'
  title: string | JSX.Element
  captureSrc: string
  captureAlt?: string
  href: string
  stack?: undefined
  gitHref?: undefined
  ServiceProps?: undefined
  desc: string | JSX.Element
}

export type Props = PortfolioProps | ServiceProps | ArticleProps

export const RichCard: React.FC<Props> = ({
  type,
  title,
  captureSrc,
  captureAlt,
  href,
  stack,
  gitHref,
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
          {type === 'portfolio' &&
            stack &&
            Object.values(stack).map((v, i) => (
              <Typography key={i} sx={{ display: 'flex' }}>
                <span style={{ flexShrink: '0', marginRight: '5px' }}>
                  {Object.keys(stack)[i] == 'framework'
                    ? 'Framework:'
                    : Object.keys(stack)[i] == 'css'
                    ? 'Css:'
                    : Object.keys(stack)[i] == 'js'
                    ? 'Js:'
                    : Object.keys(stack)[i] == 'deploy'
                    ? 'Deploy:'
                    : null}
                </span>
                <span>{v}</span>
              </Typography>
            ))}
        </div>
      </CardContent>
      <CardActions>
        {type === 'portfolio' || type === 'service' ? (
          <Button
            size='small'
            href={href}
            target='_blank'
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <OpenInNewIcon />
            <Typography sx={{ marginLeft: '10px' }}>view</Typography>
          </Button>
        ) : null}
        {type === 'article' && (
          <Button size='small' href={href}>
            <Typography sx={{ marginLeft: '10px' }}>view</Typography>
          </Button>
        )}
        {type === 'portfolio' && gitHref && (
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
