import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from './Providers.jsx'
import App from './App.jsx'
import './styles/index.css'
import './styles/scroll.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>,
)
