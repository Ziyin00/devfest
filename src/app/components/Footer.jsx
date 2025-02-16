import Image from 'next/image'
import React from 'react'
import instagram from '../../../public/Instagram.png' 
import facebook from '../../../public/Facebook.png' 
import linkedin from '../../../public/Linkedin.png' 
import twitter from '../../../public/Twitter.png' 
const Footer = () => {
  return (
      <div className='bg-black text-gray-300 w-screen h-[250px] text-center sm:mt[500px] md:mt-[450px] lg:mt-[250px] xl:mt-0 mt-[1620px] '>
          <div className='pt-10'>
              <p className='font-bold'>Tech Fest 2025  &ndash; Connect. Innovate. Grow.</p>
              <p className='font-light'>Jimma University  -   Event Day  Sat, Feb 25</p>
              <p className='font-light'>Follow us for updates: @jit_TechClub</p>
              <div className='flex items-center gap-1 justify-center'>
                  <Image src={instagram} width="30px" height="30px" alt='instagram' className='  w-5 sm:w-7 h-5 sm:h-7 mt-14'  />
                  <Image src={facebook} width="30px" height="30px" alt='instagram' className='  w-5 sm:w-7 h-5 sm:h-7 mt-14'  />
                  <Image src={linkedin} width="30px" height="30px" alt='instagram' className='  w-5 sm:w-7 h-5 sm:h-7 mt-14'  />
                  <Image src={twitter} width="30px" height="30px" alt='instagram' className='  w-5 sm:w-7 h-5 sm:h-7 mt-14'  />
              </div>
              <p className='font-light'>&copy;  2025 Tech Fest | Powered by the Tech Community</p>
          </div>
      
    </div>
  )
}

export default Footer
