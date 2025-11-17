import React from 'react'
import Navbar from './Navbar'
import Loginbtn from '../components/buttons/Loginbtn'
import Signupbtn from '../components/buttons/Signupbtn'

function Hero() {
  return (
    <>
        <div className='flex w-full h-full flex-col justify-center items-start font-semibold relative'>
            <p className='absolute top-[5%] left-[45%]'>[NextNiche]</p>
            <p className='absolute top-[25%] left-[20%]'>[SharkTank]</p>
            <p className='absolute top-[60%] left-[45%]'>[StartupExpo]</p>
            <p className='absolute top-[75%] left-[33%]'>[StandUp]</p>
            <p className='text-8xl'>Startup Saga 5.0</p>
            <p className='text-8xl'>Coming Soon</p>
        </div>
        <div className='flex flex-row justify-between w-full mb-16 border-b py-4'>
            <div><p>/ Play the Game, Earn the Profits!</p></div>
            <div className='flex flex-row gap-3'>
                <Loginbtn label='Login'/>
                <Signupbtn label='Sign UP'/>
            </div>
        </div>
    </>
  )
}

export default Hero