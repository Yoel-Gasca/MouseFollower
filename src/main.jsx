import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //verifica que efecto se aplique de forma correcta
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
