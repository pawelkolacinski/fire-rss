import React from 'react'
import { Box } from '@mui/material'

export default function Image({ sx, alt, children, ...props }) {
  return (
    <Box sx={sx}>
      <img {...props} alt={alt} />
    </Box>
  )
}
