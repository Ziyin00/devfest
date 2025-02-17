
import React from 'react'
import Image from 'next/image'
import vectorwhite from '../../../public/Vector.png'
import underline from '../../../public/Underline_10.png'
import devgif from '../../../public/dev-gif.gif'
import Timer from './Timer'
const Hero = () => {
  return (
    <div className='bg-black text-white w-screen text-center overflow-hidden'>

      <div>
      <div className=' flex justify-center text-center'>
        <h3 className=' sm:text-4xl text-2xl text mt-10 sm:mt-20  font-medium'>Tech Fest 2025</h3>
        <Image src={vectorwhite} width="30px" height="30px" alt='vector' className='  sm:w-10 w-8 sm:h-10 h-8 sm:mt-14 mt-7'  /> 
      </div>
      <p className='text-gray-400'>Sat, Feb 25</p>
      <h1 className='sm:text-8xl text-6xl font-bold'>Connect, Learn <br/> & Lead</h1>
        <Image src={underline} width="50px" height="50px" alt='underline' className='sm:ml-[28%] ml-[20%] sm:mt-7 mt-1  lg:w-[800px] sm:w-[550px] w-[250px]' /> 
        <Timer launchDate="2025-02-25T02:00:00"/>
        
        
        <div className='z-10'>
          
      <p className='sm:mx-[20%] mx-[8%] font-light text-white sm:text-gray-300 '><span className='font-bold'>More than an event—it's a movement! </span>A place to connect, create, and grow with our tech family. Whether you're starting out or leveling up, this is where innovation meets opportunity!</p>
       </div>
      <div className='flex flex-col justify-center sm:bg-black w-screen items-center sm:opacity-100 opacity-70'>

        <Image src={devgif} width={700} height={10} alt='underline' className='  flex  scale-x-150 sm:scale-x-105 scale-150  sm:h-[70vh] sm:w-[70vw] h-[45vh] sm:mt-40 -mt-4 ' /> 
        <div className='bg-white h-40 -mt-40 w-screen z-10 hidden sm:flex'></div> 
        
      </div>
        

      </div>
      
      
    </div>
  )
}

export default Hero
