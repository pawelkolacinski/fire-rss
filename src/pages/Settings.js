import React, { useRef, useEffect, useState } from 'react'

import useRSSSettings from '../hooks/useRSSSettings'
import {
  Paper,
  Container,
  Button,
  TextField,
  Box,
  Typography,
  Alert,
  Fade,
} from '@mui/material'

export default function Settings() {
  const {
    addChannel,
    deleteChannel,
    editChannel,
    channels,
    saveSettings,
    savingSuccess,
  } = useRSSSettings()
  const [showSuccessAlert, setSuccessAlert] = useState(false)

  const newChannel = useRef(null)

  const formSubmitHandler = (e) => {
    e.preventDefault()
    saveSettings()
  }

  useEffect(() => {
    if (savingSuccess) {
      setSuccessAlert(true)
      setTimeout(() => setSuccessAlert(false), 2000)
    }
  }, [savingSuccess])

  return (
    <Container maxWidth="sm" sx={{ my: 2, p: 2 }}>
      <Paper sx={{ p: 2 }}>
        <form onSubmit={formSubmitHandler}>
          <Fade in={showSuccessAlert} timeout={1000}>
            <Alert severity="success">Settings saved</Alert>
          </Fade>
          <Typography variant="h5" component="h2">
            Channels
          </Typography>
          {channels.length > 0 &&
            channels.map((channel, index) => (
              <Box
                sx={{ my: 2, display: 'flex', alignItems: 'center', gap: 2 }}
                key={index}
              >
                <TextField
                  required
                  label={`Channel ${index + 1}`}
                  variant="outlined"
                  value={channel.url}
                  onChange={(e) => {
                    editChannel(index, { ...channel, url: e.target.value })
                  }}
                />
                <Button
                  sx={{ py: 2 }}
                  type="button"
                  variant="outlined"
                  onClick={() => {
                    deleteChannel(index)
                  }}
                >
                  X
                </Button>
              </Box>
            ))}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 6 }}>
            <TextField
              id="addChannel"
              label="Add channel"
              variant="outlined"
              inputRef={newChannel}
            />
            <Button
              sx={{ py: 2 }}
              type="button"
              variant="outlined"
              onClick={() => {
                addChannel({ url: newChannel.current.value })
                newChannel.current.value = ''
              }}
            >
              Add
            </Button>
          </Box>

          <Button
            type="submit"
            sx={{ mx: 'auto', display: 'block' }}
            variant="contained"
          >
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  )
}
