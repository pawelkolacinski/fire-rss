import { Paper, Box, Link, Typography, Button } from '@mui/material'
import { format } from 'date-fns'

export default function ChannelArticle({ channelInfo, article }) {
  let pubDate = 'Date unknown'
  try {
    pubDate = format(new Date(article.pubDate), 'dd-MM-yyyy HH:mm:ss')
  } catch (error) {}

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        m: 2,
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
      component="article"
    >
      <Link
        href={channelInfo.image.link}
        sx={{
          flexGrow: 0,
          flexShrink: 0,
          flexBasis: '15%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <img
          src={channelInfo.image.url}
          alt={channelInfo.image.title}
          style={{ width: '100%', maxWidth: '150px' }}
        />
      </Link>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Link
          href={article.link}
          sx={{ display: 'flex', flexDirection: 'column', height: '100%', color:'black' }}
          underline="none"
          target="_blank"
        >
          <Typography variant="p">Publication date: {pubDate}</Typography>
          <Typography variant="h6" component="h2" sx={{mt: {xs:1, sm:'initial'}}}>
            {typeof article.title === 'string'
              ? article.title
              : 'Title unknown'}
          </Typography>
          <Button
            variant="contained"
            sx={{
              alignSelf: { xs: 'center', sm: 'end' },
              mt: { xs: 2, sm: 'auto' },
            }}
          >
            Go to Article
          </Button>
        </Link>
      </Box>
    </Paper>
  )
}
