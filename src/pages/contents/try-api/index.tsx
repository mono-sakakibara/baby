import axios, { AxiosRequestConfig } from 'axios'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Typography, Link } from '@mui/material'
import { useEffect, useState } from 'react'

export const Page: React.FC = () => {
  type response = {
    coord: { lon: number; lat: number }
    weather: { id: number; main: string; description: string; icon: string }[]
    base: string
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      humidity: number
    }
    visibility: number
    wind: { speed: number; deg: number }
    clouds: { all: number }
    dt: number
    sys: {
      type: number
      id: number
      country: string
      sunrise: number
      sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
  }

  const [response, setResponse] = useState<response>()

  useEffect(() => {
    const options: AxiosRequestConfig<any> = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: 'Japan,tokyo',
        lat: '0',
        lon: '0',
        id: '2172797',
        lang: 'Japan',
        units: 'imperial',
        mode: 'json',
      },
      headers: {
        'x-rapidapi-key': '26d7a9d72dmshb98a24d3cb51f93p157707jsn09c0f899d4be',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    }
    axios
      .request(options)
      .then((response) => setResponse(response.data))
      .catch((error) => setResponse(error))
  }, [])

  function convertTemp(temp: number) {
    const value = ((temp - 32) * 5) / 9
    const roundUpValue = Math.round(value * 10) / 10
    return roundUpValue
  }

  const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const date = currentDate.getDate()
  const dayNum = currentDate.getDay()
  const weekday = ['日', '月', '火', '水', '木', '金', '土']
  const day = weekday[dayNum]

  const fullNowDate = `${year}年${month}月${date}日${day}曜日`

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth='md'>
        <Box sx={{ minWidth: 275 }}>
          <Typography gutterBottom variant='h2' component='h1'>
            apiを叩きまくってみたい
          </Typography>
          <Typography gutterBottom variant='h5' component='p'>
            最近Promiseやasync/awaitといった非同期処理について学ぶ機会がありました。なかなか教材では実際にapiを取得するとこまでできなかったので、実験してみよう！という記事です。
          </Typography>
          <Typography gutterBottom variant='h5' component='p'>
            まずは面白そうなapiはないかと思い、色々検索してみました。Nasaのapiなんてのがあって、とても興味深かったのですが、アクセスができず。。さらに模索するうちにこんなサービスに出会いました。
          </Typography>
          <Typography gutterBottom variant='h5' component='p'>
            <Link href='https://api.rakuten.net/'>Rakuten Rapid API</Link>
          </Typography>
          <Typography gutterBottom variant='h5' component='p'>
            世界中のApiのプラットフォームみたいで、ブラウザから色々なapiをテストすることができます。テストでは実際にリクエストを出して、結果の表示まで確認することができる、まさに今の自分にうってつけなサービスです。
            <br />
            色々ありすぎるので、ともあれ身近なお天気のapiを叩いてみようというのが、今回の企画であります。
          </Typography>
          <Typography gutterBottom variant='h5' component='p'>
            さあ、コンソールに結果も表示できたしあとは表示させるだけ。と思っていたのですが。。
            <br />
            返ってくる値がPromiseで、errorになってしまうという、Reactの壁が。。何を隠そう、Reactのレンダリングの構造や、hooksの理解が全然できていないのです。。（隠せてすらいない）
          </Typography>
          <Typography gutterBottom variant='h5' component='p'>
            というわけで頑張った結果が、こちら！
            <br />
            .<br />
            .<br />
            .<br />
          </Typography>
          <Typography variant='h5' component='p'>
            {fullNowDate}
            <br />
            日本の気温は
            <br />
            {response && convertTemp(response.main.temp)}°Cです
          </Typography>
          <Typography gutterBottom variant='h5' component='p'>
            .<br />
            .<br />
            .<br />
            いいじゃないか！笑 とりあえず今日はここまで。
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default Page
