import React from 'react'
import vectorblack from '../../../public/Misc_02.png'
import Image from 'next/image'


const Guest = () => {
  return (
    <div className='bg-white text-black w-vw  mt-10 sm:-mt-10 mb-20 h-screen text-center mx-[15%]'>
      <div className=' flex justify-center text-center'>
              <h3 className=' text-4xl mt-0  font-extrabold'>Our Guests</h3>
              <Image src={vectorblack} width="30px" height="30px" alt='vector' className='  w-10 h-10 -mt-4 hidden sm:flex'  /> 
      </div>
      <p className='font-light'>Meet the Minds Shaping Our Tech Future!</p>

      <div className='flex  flex-wrap gap-10 justify-center items-center mt-10'>

      <div className='text-center'>
        <div className='w-[200px] h-[180px] bg-[#D9D9D9] rounded-3xl '></div>
        <h1 className='font-extrabold'>Ziyin Abdl</h1>
        <p className='font-light'>Developer</p>

        </div>
        
        <div className='text-center'>
        <div className='w-[200px] h-[180px] bg-[#D9D9D9] rounded-3xl '></div>
        <h1 className='font-extrabold'>Ziyin Abdl</h1>
        <p className='font-light'>Developer</p>

        </div>
        
        <div className='text-center'>
        <div className='w-[200px] h-[180px] bg-[#D9D9D9] rounded-3xl '></div>
        <h1 className='font-extrabold'>Ziyin Abdl</h1>
        <p className='font-light'>Developer</p>

        </div>
        <div className='text-center'>
        <div className='w-[200px] h-[180px] bg-[#D9D9D9] rounded-3xl '></div>
        <h1 className='font-extrabold'>Ziyin Abdl</h1>
        <p className='font-light'>Developer</p>

        </div>
        <div className='text-center'>
        <div className='w-[200px] h-[180px] bg-[#D9D9D9] rounded-3xl '></div>
        <h1 className='font-extrabold'>Ziyin Abdl</h1>
        <p className='font-light'>Developer</p>

        </div>
        <div className='text-center'>
        <div className='w-[200px] h-[180px] bg-[#D9D9D9] rounded-3xl '></div>
        <h1 className='font-extrabold'>Ziyin Abdl</h1>
        <p className='font-light'>Developer</p>

        </div>
        <div className='text-center'>
        <div className='w-[200px] h-[180px] bg-[#D9D9D9] rounded-3xl '></div>
        <h1 className='font-extrabold'>Ziyin Abdl</h1>
        <p className='font-light'>Developer</p>

        </div>
        <div className='text-center'>
        <div className='w-[200px] h-[180px] bg-[#D9D9D9] rounded-3xl '></div>
        <h1 className='font-extrabold'>Ziyin Abdl</h1>
        <p className='font-light'>Developer</p>

      </div>
      </div>

      <div className="sm:-ml-16 -ml-8">
        <Image src={vectorblack} width="30px" height="30px" alt='vector' className='w-10 h-10 ' />
        </div> 
      
    </div>
  )
}

export default Guest
