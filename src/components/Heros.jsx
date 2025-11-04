import React, { useEffect } from 'react'
import img1 from '../assets/images/img1.png'
import img11 from '../assets/images/img11.png'
import line from '../assets/images/line.png'
import apple from '../assets/images/Apple.png'
import playstore from '../assets/images/Playstore.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Heros = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      offset: 100
    })
  }, [])




  return (
    <div className='bg-[#163300] max-w-[1170px] mx-auto max-md:space-y-8 md:flex md:flex-row-reverse md:items-center md:justify-between pt-6 pb-12'>
        {/*image div */}
        <div className='lg:w-[40%]' data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
            <div className='relative group'>
              <img src={img11} alt="Invoicer inventory management app interface showing POS system and stock tracking features" className='object-cover w-full transform transition-all duration-700 group-hover:scale-105' />
              <div className='absolute inset-0 bg-gradient-to-r from-[#163300]/0 to-[#163300]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
        </div>

        {/* write up */}
        <div className='lg:w-[50%] space-y-8 max-md:px-4'>
          <div className='space-y-2'>
            <div 
              className='text-[16px] text-[#9FE870] font-[600] font-outfit'
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <h4 className='inline-block drop-shadow-[0_0_8px_rgba(159,232,112,0.5)]'>Trusted by over 2,000 retailers and shop owners</h4>
            </div>

            <div className='relative text-[30px] md:text-[54px] text-white font-bold font-urbanist'>
              <div 
                className='absolute right-0 top-10 md:top-16 animate-float'
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <img src={line} alt="" className='transform hover:rotate-12 transition-transform duration-300 hover:scale-110' aria-hidden="true" />
              </div>
            
              <p 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                className='relative z-10'
              >
                <span className='inline-block animate-slideIn'>Know watin Dey your Store.</span>
                <br />
                <span 
                  className='inline-block animate-slideIn-delay bg-gradient-to-r from-[#9FE870] to-white bg-clip-text text-transparent'
                >
                  Every-time.
                </span>
              </p>
            </div>

            <div 
              className='max-w-[490px]'
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <p className='text-[18px] text-[#DDDDDD] font-[400] font-outfit leading-relaxed'>
                Track your Stock, record your sales, and send receipts with ease- Invoicer was built for the everyday hustlers and serious stop owner
              </p>
            </div>
          </div>

          {/* apple/playstore */}
          <div 
            className='flex gap-4'
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
              <a 
                href="https://apps.apple.com/us/app/invoicer-pos-stock-manager/id6751941791" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='w-[144px] h-[48px] bg-black rounded-[7.5px] flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#9FE870]/50 active:scale-95'
              >
                <div className='w-[24px] h-[28px] transform transition-transform duration-300 hover:rotate-12'>
                  <img src={apple} alt="Download Invoicer on App Store" className='w-full object-cover'/>
                </div>
                <div className='font-poppins text-white'>
                  <p className='text-[11px] font-[500]'>Download on the</p>
                  <p className='text-[21px] font-[500] -mt-2'>App Store</p>
                </div>
              </a>

              <a 
                href="https://play.google.com/store/apps/details?id=com.bwh.invoicer" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='w-[144px] h-[48px] bg-black rounded-[7.5px] flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#9FE870]/50 active:scale-95'
              >
                <div className='w-[24px] h-[28px] transform transition-transform duration-300 hover:rotate-12'>
                  <img src={playstore} alt="Download Invoicer on Google Play Store" className='w-full object-cover'/>
                </div>
                <div className='font-poppins text-white'>
                  <p className='text-[11px] font-[500]'>GET IT ON</p>
                  <p className='text-[18px] font-[500] -mt-2'>Google Play</p>
                </div>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Heros
