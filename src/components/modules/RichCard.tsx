import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Chip,
  Box,
  Grid,
} from '@mui/material'
import Card from '@mui/material/Card'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ArticleIcon from '@mui/icons-material/Article'
import PaletteIcon from '@mui/icons-material/Palette'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import GitHubIcon from '@mui/icons-material/GitHub'

interface PortfolioProps {
  type: 'portfolio'
  title: string | JSX.Element
  captureSrc?: string
  captureAlt?: string
  href: string
  stack: {
    framework?: string
    css?: string
    js?: string
    deploy?: string
  }
  gitHref?: string
  desc?: string | JSX.Element
  date: string
}
interface ServiceProps {
  type: 'service'
  title: string | JSX.Element
  captureSrc?: string
  captureAlt?: string
  href: string
  stack?: undefined
  gitHref?: undefined
  ArticleProps?: undefined
  desc: string | JSX.Element
  date: string
}
interface ArticleProps {
  type: 'article'
  title: string | JSX.Element
  captureSrc?: string
  captureAlt?: string
  href: string
  stack?: undefined
  gitHref?: undefined
  ServiceProps?: undefined
  desc: string | JSX.Element
  date: string
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
  date,
}) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {captureSrc && (
        <CardMedia
          component='img'
          image={captureSrc}
          alt={captureAlt}
          sx={{ height: '300px', objectFit: 'contain' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant='body1'
          component='h2'
          sx={{ fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        {desc && <Typography variant='subtitle1'>{desc}</Typography>}
        <div style={{ marginTop: '10px' }}>
          <Typography>{date}</Typography>
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
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Chip
            label={type}
            variant='outlined'
            size='small'
            icon={
              type === 'article' ? (
                <ArticleIcon />
              ) : type === 'portfolio' ? (
                <PaletteIcon />
              ) : (
                <RocketLaunchIcon />
              )
            }
          />
          <Box>
            {type === 'portfolio' || type === 'service' ? (
              <Chip
                label='view'
                component='a'
                variant='outlined'
                size='small'
                href={href}
                target='_blank'
                icon={<OpenInNewIcon />}
                color='info'
                clickable
              />
            ) : null}
            {type === 'article' && (
              <Chip
                label='view'
                component='a'
                variant='outlined'
                size='small'
                href={href}
                target='_blank'
                color='info'
              />
            )}
            {type === 'portfolio' && gitHref && (
              <Chip
                label='repository'
                component='a'
                variant='outlined'
                size='small'
                href={gitHref}
                target='_blank'
                icon={<GitHubIcon />}
                color='info'
                sx={{ marginLeft: '10px' }}
                clickable
              />
            )}
          </Box>
        </Grid>
      </CardActions>
    </Card>
  )
}
