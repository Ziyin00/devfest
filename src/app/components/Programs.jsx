import React from 'react'
import vectorblack  from '../../../public/Misc_02.png' 
import Image from 'next/image'

const Programs = () => {
  return (
    <div className='bg-white w-screen z-10'>

    <div className='bg-white text-black mt-0  sm:-mt-14 h-screen text-center sm:mx-[20%]'>
      
      <div className=' flex justify-center text-center '>
              <Image src={vectorblack} width="30px" height="30px" alt='vector' className='w-10 h-10 mt-14'  /> 
              <h3 className=' text-4xl mt-20  font-medium '> What&rsquo;s in Store?</h3>
      </div>
      
      <div className='mt-5'>
        <h1 className='text-lg font-medium'>Student-Led Talks & Showcases</h1>
        <p className='font-light'>Get inspired by projects and ideas from your fellow students. See real-world innovations and creative solutions built within our community.</p>
      </div>
      <div className='mt-5'>
        <h1 className='text-lg font-medium'> Advice from Our Seniors</h1>
        <p className='font-light'> Learn from those who&rsquo;ve been in your shoes. Hear their experiences, challenges, and tips on excelling in tech, career-building, and making the most of university life.</p>
      </div>
      <div className='mt-5'>
        <h1 className='text-lg font-medium'>Collaboration & Networking</h1>
        <p className='font-light'>Connect with like-minded students who share your passion for technology. This is your chance to find teammates, mentors, and friends who will push you forward.</p>
      </div>
      <div className='mt-5'>
        <h1 className='text-lg font-medium'>Live Projects & Tech Demos</h1>
        <p className='font-light'>Experience technology in action! From AI and coding to robotics and design, see firsthand how technology is shaping the future.</p>
      </div>
      <p className='mt-16 text-[#3A6CFF] '>Stay tuned for guest announcements & event details!</p>
      
     

      
    </div>
    </div>
  )
}

export default Programs
