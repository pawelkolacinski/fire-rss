import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
import Container from '@mui/material/Container'

import { orange } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './App.css'

function App() {
  const user = null

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
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

              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />

              <Route
                path="/register"
                element={user ? <Navigate to="/" /> : <Register />}
              />

              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
