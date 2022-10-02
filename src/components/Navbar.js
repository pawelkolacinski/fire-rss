import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { Link as RouterLink } from 'react-router-dom'
import ResponsiveNavBarMenu from './ResponsiveNavBarMenu'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="div">
            Fire RSS
          </Typography>
        </RouterLink>

        <ResponsiveNavBarMenu>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/settings">
            Settings
          </Button>
        </ResponsiveNavBarMenu>
      </Toolbar>
    </AppBar>
  )
}
