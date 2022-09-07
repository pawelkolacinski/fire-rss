import { Paper, Box, Link, Typography } from '@mui/material'
import { format} from 'date-fns'


export default function ChannelArticle({ channelInfo, article }) {

  const pubDate = format(new Date(article.pubDate), 'dd-MM-yyyy HH:mm:ss')
    

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
      <Link href={channelInfo.image.link} sx={{ flexGrow: 0, flexShrink:0,  flexBasis: '15%',  display:'flex', alignItems:'center',justifyContent:'center',p:2 }} >
        
            <img src={channelInfo.image.url} alt={channelInfo.image.title} style={{width:'100%',maxWidth:'150px'}}  />
        
      </Link>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Link href={article.link} underline="none">
          <Typography variant="p">
            Publication date: {pubDate}
          </Typography>
          <Typography variant="h6" component="h2">
            {article.title}
          </Typography>
        </Link>
      </Box>
    </Paper>
  )
}
