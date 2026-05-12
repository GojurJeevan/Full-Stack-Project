import { useLocation } from 'react-router-dom'
import './App.css'
import { Header } from './pages/Header'
import { AppRouter } from './routing/AppRouter'

function App() {

  const location = useLocation();
  const hide = location.pathname === "/"

  return(
    <>
      {!hide && <Header />}
      <AppRouter />
    </>
  )
}

export default App
