import React from 'react'
import PendulumSVG from './assets/PendulumSVG'


export default function Navbar({ contactOpen, setContactOpen }) {
  return (
    <div className=' flex justify-center items-center'>
      <div className='w-full max-w-[1440px] h-[80px] flex flex-row justify-between items-center sm:px-10 pr-4 pt-3 pb-3'>
        <div className='flex justify-center items-center sm:ml-0 -ml-2 '>
          <div>
            <PendulumSVG className="hidden lg:block" width={"64px"} height={"64px"}></PendulumSVG> 
            <PendulumSVG className="lg:hidden " width={"54px"} height={"54px"}></PendulumSVG> 
          </div>
          <div className='flex flex-col justify-start sm:items-end items-start '>
            <p className='text-md sm:text-2xl font-semibold text-red-80 '>Simulatore di Barbiere</p>
            <p className='text-sm sm:text-base font-semibold text-black/60 '>tuscanyai.it</p>
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <button
            onClick={() => setContactOpen(true)}
            className='border z-40 hover:shadow-xl bg-black/90 hover:bg-black/80  text-white active:shadow-none  transition-colors  font-bold lg:py-4 py-3 px-6 sm:px-8 rounded-xl'
          >
            Contattaci
          </button>
          
          <PendulumSVG className="hidden lg:block" width={"64px"} height={"64px"}></PendulumSVG> 
          
        </div>
      </div>
    </div>
    
  ) 
}