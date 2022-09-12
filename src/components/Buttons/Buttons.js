import React from 'react'
import { icons } from '../../constatns'

const Buttons = () => {
  return (
    <div className='flex items-center justify-center'>
        <buuton className=' border-2  rounded-[40px] p-2 px-6 text-lg font-semibold tracking-wider  uppercase 
         border-black'> View all work</buuton>
         <buuton className='ml-3  bg-[red]  rotate-[270deg] text-lg  rounded-[50%] p-2 border-black '><icons.BsArrowDownLeft/> </buuton>
    </div>
  )
}

export default Buttons