import React from 'react'
import TestimonialCards from '../../Components/TestimonialCards'

const Testimonials = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto container py-10"> 
        <div className=" text-center">
          
          <h2 className="xl:text-[54.85px] md:text-5xl font-[700] font-IBM text-[25.49px] text-[#013F1E]">Client Testimonials</h2>
        </div>
        <div className='w-full overflow-x-auto'>
          <TestimonialCards/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
