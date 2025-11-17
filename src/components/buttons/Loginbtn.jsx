 import { ArrowRight } from 'lucide-react'
import React from 'react'
 
 function Loginbtn({label}) {
   return (
     <div className='flex flex-row justify-between items-center border-2 py-0 px-4'>
        <p>{label}</p>
        <ArrowRight/>
     </div>
   )
 }
 
 export default Loginbtn

 