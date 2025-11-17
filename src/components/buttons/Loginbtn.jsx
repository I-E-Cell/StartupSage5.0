 import { ArrowRight } from 'lucide-react'
import React from 'react'
 
 function Loginbtn({label}) {
   return (
     <div className='flex flex-row justify-between text-sm lg:text-xl md:px-2.5 md:py-1.5 items-center border-2 py-0 px-4'>
        <p className='px-0 py-0'>{label}</p>
        <ArrowRight/>
     </div>
   )
 }
 
 export default Loginbtn

 