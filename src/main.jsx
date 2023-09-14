import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'
import './styles/font.css'
import './styles/scroll.css'

// const themeScript = document.createElement('script')
// themeScript.src = '/src/scripts/theme.js'
// document.head.appendChild(themeScript)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
