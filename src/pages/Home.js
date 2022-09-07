import React from 'react'
import useRSSSettings from '../hooks/useRSSSettings'
import { Container, Typography } from '@mui/material'
import Channel from '../components/Channel'

export default function Home() {
  const { channels } = useRSSSettings()

  return (
    <Container maxWidth="xl" sx={{ my: 2, p: 2 }}>
      {channels.length === 0 && (
        <Typography sx={{ textAlign: 'center' }}>
          You currently have no channels. Please create some in settings.
        </Typography>
      )}

      {channels.length > 0 &&
        channels.map((channel, index) => (
          <Channel channel={channel} key={index} />
        ))}
    </Container>
  )
}
