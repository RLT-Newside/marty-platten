import Navbar from './components/Navbar.tsx'
import MainPage from './components/MainPage.tsx'
import { ThemeProvider } from './ThemeContext.tsx'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <MainPage />
    </ThemeProvider>
  )
}

export default App
