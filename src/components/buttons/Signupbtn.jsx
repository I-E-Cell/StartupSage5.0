import { ArrowRight } from 'lucide-react'
import React from 'react'

function Signupbtn({label}) {
  return (
    <div className='flex flex-row justify-between items-center text-sm lg:text-xl md:px-2.5 md:py-1.5 bg-blue-500 font-rainy text-white py-0 px-4'>
            <p>{label}</p>
            <ArrowRight/>
    </div>
  )
}

export default Signupbtn