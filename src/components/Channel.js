import React, { useEffect } from 'react'
import { Alert, Box } from '@mui/material'
import useRSSFetch from '../hooks/useRSSFetch'
import CircularProgress from '@mui/material/CircularProgress'

import ChannelArticle from './ChannelArticle'

export default function Channel({ channel }) {
  const { fetchRSSChannel, isLoading, error, data } = useRSSFetch(channel.url)

  useEffect(() => {
    fetchRSSChannel()
  }, [fetchRSSChannel])

  const channelData = data?.channel

  return (
    <Box sx={{ m: 4, p: 4 }}>
      {error && <Alert severity="error">There is an error: {error} </Alert>}
      {isLoading && (
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {channelData &&
        channelData.item
          .filter((item, index) => index <= 3)
          .map((article) => (
            <ChannelArticle article={article} channelInfo={channelData} />
          ))}
    </Box>
  )
}
