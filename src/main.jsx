import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './section/Hero.jsx'
import Navbar from './section/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[rgb(240,241,240)] h-screen w-screen flex flex-col items-center'>
        <Navbar/>
        <Hero />
    </div>
  </StrictMode>,
)
