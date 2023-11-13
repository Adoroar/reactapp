import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contacts from './views/Contacts'
import News from './views/News'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
    
  )
}



export default App
