import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.scss'
import AppRoutes from './routes.jsx'
import { ThemeProvider } from './context/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
)
