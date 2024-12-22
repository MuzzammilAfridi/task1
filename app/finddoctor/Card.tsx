import React from 'react'

const Card = () => {
  return (
    <div className="h-fit rounded-[30px] w-[350px] p-5 flex items-center justify-center flex-col bg-[#FFF7E2]">
{/* Profile Image */}
        <img className='h-[150px] object-cover rounded-full w-[150px]' src="./profile2.png" alt="img" />

        <p className='font-bold text-[32px] leading-[28px] text-[#2E2F2E]'>Dr. Prerna Narang</p>

{/* Description (Experience) */}
<div className="my-3 ">
        <span className='flex gap-2 mt-3'>
        <img src="./fertility.svg" alt="img" />
        <p className='text-[16px] font-normal text-[#646665]'>Male-Female Infertility</p>

        </span>
        <span className='flex gap-2 mt-1'>
        <img src="./expre.svg" alt="img" />
        <p className='text-[16px] font-normal text-[#646665]'>7 years of Experience</p>

        </span>
        <span className=' flex gap-2 mt-1'>
        <img src="./comment.svg" alt="img" />
        <p className='text-[16px] font-normal text-[#646665]'>Speaks: English, Hindi, Marathi</p>

        </span>

        </div>


        <div className="flex gap-2">


        <div className='pt-1 w-[138px] h-[55px] border border-[#3A643B63] rounded-lg mt-4 text-center'>
            <p className='font-semibold 
             text-[14px] text-[#3c3c3c]'>Video Consultation</p>
            <p className='text-[#3A643B] font-bold'>₹800</p>
        </div>
        <div className='pt-1 w-[138px] h-[55px] border border-[#3A643B63] rounded-lg mt-4 text-center'>
            <p className='font-semibold 
             text-[14px] text-[#3c3c3c]'>Video Consultation</p>
            <p className='text-[#3A643B] font-bold'>₹800</p>
        </div>

        
        </div>
        <div className="w-[358px] flex flex-col mt-5 gap-3 ">
            <button className='mx-auto w-[280px] rounded-lg bg-white text-[#3A643B] font-semibold h-[40px] border border-[#3A643B]'>View Profile</button>
            <button  className='mx-auto w-[280px] rounded-lg bg-[#3A643B] text-white font-semibold h-[40px] border border-[#3A643B]'>Book a consultation</button>
        </div>
        
        
    </div>
  )
}

export default Card
