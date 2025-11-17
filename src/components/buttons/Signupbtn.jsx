import { ArrowRight } from 'lucide-react'
import React from 'react'

function Signupbtn({label}) {
  return (
    <div className='flex flex-row justify-between bg-blue-500 text-white py-0 px-4'>
            <p>{label}</p>
            <ArrowRight/>
    </div>
  )
}

export default Signupbtn