import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Settings from './pages/Settings'

import Container from '@mui/material/Container'

import { red } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './App.css'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[400],
      },
    },
  })

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
