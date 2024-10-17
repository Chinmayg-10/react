import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement=React.createElement(
  'a',{
    href:'https://goggle.com',target:'_blank'
  },
  'click me to visit goggle'
)
createRoot(document.getElementById('root')).render(
  // reactElement
  <App/>
)
