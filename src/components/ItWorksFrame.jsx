import React, { useEffect }  from 'react'
import frame1 from '../assets/images/account-add 1.png'
import frame2 from '../assets/images/product-catalog 1.png'
import frame3 from '../assets/images/delivery-tracking-02 1.png'
import plus from '../assets/images/plus-square.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ItWorksFrame = () => {

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div className='max-w-[1170px] mx-auto rounded-2xl flex flex-col items-center lg:flex-row justify-between p-6 bg-white relative' data-aos="fade-up" data-aos-duration="2000">
        {/* plus-square */}
        <div className='w-6 h-6 absolute right-30 -top-3'>
            <img src={plus} alt="" className='w-full object-cover' aria-hidden="true" />
        </div>


        {/* frame cards */}
      <div className='w-[293px] rounded-[8px] pt-[48px] px-6 pb-6'>
        {/* images */}
        <div className='relative'>
            <h4 className='font-urbanist font-bold text-[80px] text-[#F3F3F3]'>01</h4>
            <div className='w-12 h-12 mt-0 relative -top-12 left-4'>
                <img src={frame1} alt="Create free account icon - step 1 of using Invoicer inventory management app" className='w-full object-cover'/>
            </div>
        </div>
        {/* writes */}
        <div>
            <h3 className='font-urbanist font-bold text-[20px] text-[#01081B]'>Create your free account</h3>
            <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>No long forms — just your name, phone, and business name to get started.</p>
        </div>
      </div>{/* 1 */}

      <div className='w-[293px] rounded-[8px] pt-[48px] px-6 pb-6'>
        {/* images */}
        <div className='relative'>
            <h4 className='font-urbanist font-bold text-[80px] text-[#F3F3F3]'>02</h4>
            <div className='w-12 h-12 mt-0 relative -top-12 left-4'>
                <img src={frame2} alt="Add products to inventory icon - step 2 of stock management setup" className='w-full object-cover'/>
            </div>
        </div>
        {/* writes */}
        <div>
            <h3 className='font-urbanist font-bold text-[20px] text-[#01081B]'>Add Your Products</h3>
            <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>Add your items with price, quantity, and stock level — in bulk or one by one.No long forms — just your name, phone, and business name to get started.</p>
        </div>
      </div>{/* 2 */}

      <div className='w-[293px] rounded-[8px] pt-[48px] px-6 pb-6'>
        {/* images */}
        <div className='relative'>
            <h4 className='font-urbanist font-bold text-[80px] text-[#F3F3F3]'>03</h4>
            <div className='w-12 h-12 mt-0 relative -top-12 left-4'>
                <img src={frame3} alt="Track sales in real-time icon - step 3 of POS system usage" className='w-full object-cover'/>
            </div>
        </div>
        {/* writes */}
        <div>
            <h3 className='font-urbanist font-bold text-[20px] text-[#01081B]'>Track every sale in real-time</h3>
            <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>Record transactions, print/send receipts, and monitor your earnings on the go.</p>
        </div>
      </div>{/* 3 */}
      
    </div>
  )
}

export default ItWorksFrame
