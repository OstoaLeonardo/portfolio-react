import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Error404 from './pages/Error404'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default App
