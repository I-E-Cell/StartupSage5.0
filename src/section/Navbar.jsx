import React from 'react'
import Primarybtn from '../components/buttons/Primarybtn'
import sslogo from '/sslogo.svg'
import { Hamburger, HamburgerIcon, LucideHamburger, Menu } from 'lucide-react'

function Navbar() {
  return (
    <div className='border-b-black border-solid border-b-2 w-[95vw] my-4 pb-3 flex flex-row justify-between '>
        <div className='flex flex-row justify-center items-center gap-4'>
            <img src={sslogo} className='w-8' alt="" />

            <p className='md:text-3xl text-2xl  font-rainy font-semibold  '>Startup Saga 5.0</p>
        </div>
        <div className='hidden lg:flex flex-row gap-6'>
            <Primarybtn label="Brochure"/>
            <Primarybtn label="Sponsor Us"/>
        </div>
        <div className='flex lg:hidden'>
            <Menu/>
        </div>
    </div>
  )
}

export default Navbar