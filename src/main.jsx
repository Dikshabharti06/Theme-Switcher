import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-white bg-green-500 text-center dark:text-green-500 dark:bg-black'>Hey</h1>
    <App/>
  </StrictMode>,
)
