import React, { useEffect, useState } from 'react'
import { Alert, Box, Button } from '@mui/material'
import useRSSFetch from '../hooks/useRSSFetch'
import CircularProgress from '@mui/material/CircularProgress'

import ChannelArticle from './ChannelArticle'

export default function Channel({ channel }) {
  const { fetchRSSChannel, isLoading, error, data } = useRSSFetch(channel.url)
  const [showArticlesCount, setShowArticlesCount] =useState(4)

  useEffect(() => {
    fetchRSSChannel()
  }, [fetchRSSChannel])

  const channelData = data?.channel
  console.log(channelData)

  return (
    <Box sx={{ m: {xs:0, md:0} , p: {xs:0, md:0} }}>
      {error && <Alert severity="error">There is an error: {error} </Alert>}
      {isLoading && (
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {channelData &&
        channelData.item
          .filter((item, index) => index < showArticlesCount)
          .map((article, index) => (
            <ChannelArticle article={article} channelInfo={channelData} key={article.link}/>
          ))}
        {channelData && (
            <Button sx={{display:'block',mx:'auto'}} variant="contained" onClick={() => setShowArticlesCount(count => count + 4)}>Load more from {channelData.image.title ?? 'this channel'} </Button>
        )}
    </Box>
  )
}
