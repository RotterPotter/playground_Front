import React from 'react'
import PendulumSVG from './assets/PendulumSVG'


export default function Navbar({ contactOpen, setContactOpen }) {
  return (
    <div className='border-b flex justify-center items-center'>
      <div className='w-full max-w-[1440px] h-[80px] flex flex-row justify-between items-center sm:px-10'>
        <div className='flex justify-center items-start '>
          <PendulumSVG></PendulumSVG> 
          <div className='flex flex-col justify-start items-end'>
            <p className='text-2xl font-semibold text-red-80 '>Simulatore di Barbiere</p>
            <p className='font-semibold text-black/60 '>tuscanyai.it</p>
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <button
            onClick={() => setContactOpen(true)}
            className='border z-50 hover:shadow-xl bg-black/90 hover:bg-black/80  text-white active:shadow-none  transition-colors  font-bold py-3 px-8 rounded-xl'
          >
            Contatto
          </button>
          <PendulumSVG></PendulumSVG> 
        </div>
      </div>
    </div>
    
  ) 
}