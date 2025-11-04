import React from 'react'
import img1 from '../assets/images/img1.png'
import { CiBellOn } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const Hero = () => {
  return (
    <div className='bg-[#163300]'>

      {/* image div */}
      <div className=''>
        <div className='w-[542px] h-[620px] relative'>
            <img src={img1} alt="Invoicer POS system interface showing inventory management dashboard with sales alerts and stock tracking" className='object-cover w-full'/>

            {/* alert */}
            <div className='max-md:w-auto w-[316px] h-[105px] md:px-4 py-4 bg-white rounded-[8px] absolute top-[90px] left-[300px]'>
                <div className='flex items-center gap-3'>
                    <div>
                        <CiBellOn size={30}/>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-[13px] font-[600]'>Sale Alert: “Golden Penny Spaghetti” Just Sold</p>
                        <p className='text-[11px] font-[400] opacity-50'>Your staff just sold 2 packs of Golden Penny Spaghetti for ₦1,200 at 3:47 PM.</p>
                    </div>
                </div>
            </div>

            {/* add to cart */}
            <div className='w-[400px] h-[120px] bg-white rounded-[8px] absolute top-[310px] left-[40px] p-5 flex justify-center items-center'>
                {/* inner div */}
                <div className='w-[390px] h-[100px] rounded-[10px] border-[1px] border-[#ccc] border-dashed p-2.5 space-y-3'>
                    {/* content */}
                    <div className='flex justify-between items-center'>
                       <div className='flex gap-3 items-center'>
                        <div><FiShoppingBag size={24}/></div>
                        <div>
                            <p className='text-[14px] font-[700] font-poppins'>Cooking Oil</p>
                            <p  className='text-[14px] font-[400] font-poppins'>$3,000</p>
                        </div>
                       </div>
                       <div className='font-[400] font-poppins text-[14px] p-2.5 rounded-[10px] bg-[#163300] text-center text-white'>
                            <button type="button">Get Started</button>
                        </div>
                    </div>
                    
                    <div>
                        <p className='text-[14px] font-[400] text-red-600 font-poppins'>5 in Stock</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* write up */}
      <div></div>
    </div>
  )
}

export default Hero
