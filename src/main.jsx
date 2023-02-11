import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/App.min.css'
import Body from './Body'
import Header from './Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>
)
