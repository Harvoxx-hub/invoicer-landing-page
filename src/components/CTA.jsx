import React, { useEffect } from 'react'
import cta from '../assets/images/cta.jpg'
import apple from '../assets/images/Apple.png'
import playstore from '../assets/images/Playstore.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CTA = () => {

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div className='bg-[#163300] max-md:px-5 py-30'>
        {/* remember px */}
      <div className='max-w-[1170px] mx-auto rounded-[16px] overflow-hidden' style={{ backgroundImage: `url(${cta})`, backgroundSize: 'cover', backgroundPosition: 'center' }} data-aos="zoom-in-up"  data-aos-duration="3000">
        <div className='bg-[#0000009a] py-40 lg:px-[295px] space-y-10 flex flex-col items-center justify-center'>
            {/* text */}
            <div className='space-y-3  text-[#ffffff] text-center'>
                <h3 className='font-urbanist font-bold text-[40px] leading-[120%]'>Start Managing Your Store Smarter — for Free</h3>
                <p className='font-outfit font-[400] text-[16px] leading-[150%]'>No card required. Just sign up and take control.</p>
            </div>

            {/* playstore and apple */}
            <div className='flex gap-4'>
                <a href="https://apps.apple.com/us/app/invoicer-pos-stock-manager/id6751941791" target="_blank" rel="noopener noreferrer" className='w-[144px] h-[48px] bg-black rounded-[7.5px] flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity'>
                  <div className='w-[24px] h-[28px]'>
                    <img src={apple} alt="Download Invoicer inventory management app on App Store" className='w-full object-cover'/>
                  </div>
                  <div className='font-poppins text-white'>
                    <p className='text-[11px] font-[500]'>Download on the</p>
                    <p className='text-[21px] font-[500] -mt-2'>App Store</p>
                  </div>
                </a>
      
                <a href="https://play.google.com/store/apps/details?id=com.bwh.invoicer" target="_blank" rel="noopener noreferrer" className='w-[144px] h-[48px] bg-black rounded-[7.5px] flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity'>
                  <div className='w-[24px] h-[28px]'>
                    <img src={playstore} alt="Download Invoicer stock management app on Google Play Store" className='w-full object-cover'/>
                  </div>
                  <div className='font-poppins text-white'>
                    <p className='text-[11px] font-[500]'>GET IT ON</p>
                    <p className='text-[18px] font-[500] -mt-2'>Google Play</p>
                  </div>
                </a>
              </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
