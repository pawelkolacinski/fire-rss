import { Paper, Box, Link, Typography } from '@mui/material'
import Image from '../components/Image'

export default function ChannelArticle({ channelInfo, article }) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        m: 2,
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
      }}
      component="article"
    >
      <Link href={channelInfo.image.link} sx={{ flexGrow: 0 }}>
        <Image src={channelInfo.image.url} alt={channelInfo.image.title} />
      </Link>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Link href={article.link} underline="none">
          <Typography variant="p">
            Publication date: {article.pubDate}
          </Typography>
          <Typography variant="h6" component="h2">
            {article.title}
          </Typography>
        </Link>
      </Box>
    </Paper>
  )
}
