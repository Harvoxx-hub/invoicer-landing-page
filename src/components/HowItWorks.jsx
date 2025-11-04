import React, { useEffect } from 'react'
import ItWorksText from './ItWorksText'
import ItWorksFrame from './ItWorksFrame'
import worksImg from '../assets/images/worksImg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HowItWorks = () => {

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div className='py-[120px] max-md:px-5 space-y-[48px] bg-[#F6F6F6]'>
      <ItWorksText />
      <ItWorksFrame />

      <div className='max-w-[1200px] mx-auto rounded-[20px]' data-aos="fade-up" data-aos-duration="3000">
        <img src={worksImg} alt="Invoicer app workflow demonstration showing inventory management and POS system features" className='w-full object-cover' />
      </div> 
    </div>
  )
}

export default HowItWorks
