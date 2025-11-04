import React from 'react'
import logo from '../assets/images/logo.png'
import { HashLink } from "react-router-hash-link"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='bg-[#163300] py-8 max-md:px-5'>    
      <div className='max-w-[1170px] mx-auto space-y-10'>
        {/* text */}
        <div className='flex flex-col max-md:space-y-5 lg:flex-row justify-between'>
            {/* invoicer */}
            <div className='w-[278px]'>
                <div className='w-[123px]'>
                    <Link to='/'>
                        <img src={logo} alt="Invoicer logo - Inventory management and POS system app" className='w-full object-fit-cover'/>
                    </Link>
                </div>
                <p className='font-outfit font-[400] text-[16px] text-[#E6E6E6] leading-[150%]'>
                    Invoicer is a simple inventory and sales management app built for African small businesses.
                </p>
            </div>

            {/* links */}
            <div className='flex gap-25'>
                <div className='space-y-4'>
                    <h4 className='font-urbanist font-bold text-[20px] leading-[120%] text-white'>Short links</h4>
                    <ul className='font-outfit font-[400] text-[16px] leading-[150%] text-[#E6E6E6] space-y-3'>
                        <li><HashLink smooth to='#features'>Features</HashLink></li>
                        <li><HashLink smooth to='#works'>How it works</HashLink></li>
                        <li><HashLink smooth to='#testimonials'>Testimonial</HashLink></li>
                    </ul>
                </div>{/* 1 */}

                <div className='space-y-4'>
                    <h4 className='font-urbanist font-bold text-[20px] leading-[120%] text-white'>Other pages</h4>
                    <ul className='font-outfit font-[400] text-[16px] leading-[150%] text-[#E6E6E6] space-y-3'>
                        <li><Link smooth to='/policies'>Privacy policy</Link></li>
                        <li><Link smooth to='/terms'>Terms & conditions</Link></li>
                    </ul>
                </div>{/* 2 */}
            </div>
        </div>

        {/* rights */}
        <div className='space-y-8'>
            <hr className='text-[#E7E7E8]'/>
            <p className='font-outfit font-[400] text-[16px] text-[#E6E6E6] leading-[150%] text-center'>
            2025 &copy; Build with Harvoxx All rights reserved.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
