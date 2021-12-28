import { VFC, useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import SkipNextIcon from '@mui/icons-material/SkipNext'

type Props = {
  token: string
}

export const WebPlayback: VFC<Props> = ({ token }) => {
  const [is_paused, setPaused] = useState<boolean>(false)
  const [is_active, setActive] = useState<boolean>(false)
  const [player, setPlayer] = useState<Spotify.Player | null>(null)
  const [current_track, setTrack] = useState<Spotify.Track | null>(null)
  const theme = useTheme()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true

    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(token)
        },
        volume: 0.5,
      })

      setPlayer(player)

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id)
      })

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id)
      })

      player.addListener('player_state_changed', (state) => {
        if (!state) {
          return
        }

        setTrack(state.track_window.current_track)
        setPaused(state.paused)

        player.getCurrentState().then((state) => {
          if (!state) {
            setActive(false)
          } else {
            setActive(true)
          }
        })
      })

      player.connect()
    }
  }, [token])

  if (!player) {
    return (
      <>
        <div className='container'>
          <div className='main-wrapper'>
            <b>Spotify Player is null</b>
          </div>
        </div>
      </>
    )
  } else if (!is_active) {
    return (
      <>
        <Typography
          variant='h5'
          align='center'
          color='text.secondary'
          paragraph
        >
          DJはいま、お休み中です。
          <br />
          Spotifyアプリより、 Web Playback SDKに接続ください。
        </Typography>
      </>
    )
  } else {
    return (
      <>
        <Box component='div' sx={{ display: 'flex', flexDirection: 'column' }}>
          {current_track && current_track.album.images[0].url ? (
            <CardMedia
              component='img'
              sx={{ width: '100%' }}
              image={current_track.album.images[0].url}
              alt={`曲名${current_track?.artists[0].name}アーティスト名${current_track?.name}`}
            />
          ) : null}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component='div' variant='h5'>
                {current_track?.name}
              </Typography>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                component='div'
              >
                {current_track?.artists[0].name}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pl: 1,
                pb: 1,
              }}
            >
              <IconButton aria-label='previous'>
                {theme.direction === 'rtl' ? (
                  <SkipNextIcon
                    onClick={() => {
                      player.nextTrack()
                    }}
                  />
                ) : (
                  <SkipPreviousIcon
                    onClick={() => {
                      player.previousTrack()
                    }}
                  />
                )}
              </IconButton>
              <IconButton aria-label='play/pause'>
                {is_paused ? (
                  <PlayArrowIcon
                    onClick={() => {
                      player.togglePlay()
                    }}
                    sx={{ height: 38, width: 38 }}
                  />
                ) : (
                  <PauseIcon
                    onClick={() => {
                      player.togglePlay()
                    }}
                    sx={{ height: 38, width: 38 }}
                  />
                )}
              </IconButton>
              <IconButton aria-label='next'>
                {theme.direction === 'rtl' ? (
                  <SkipPreviousIcon
                    onClick={() => {
                      player.previousTrack()
                    }}
                  />
                ) : (
                  <SkipNextIcon
                    onClick={() => {
                      player.nextTrack()
                    }}
                  />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </>
    )
  }
}
