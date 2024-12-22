import React from 'react'

const Exprience = () => {
  return (
    <div className=' h-[300px] mb-3  w-[628px] border shadow rounded-t-md border-[#DCDCDC] bg-white '>
    <div className="flex items-center bg-[#F4F7EC] text-[#313131] h-[61px] rounded-t-md">
      <p className='ml-3'>My Work Experience</p>
     
     
    </div>


    <div className="w-[628px] ">
        <p className='text-[18px] font-semibold text-[#3A643B] my-3 ml-3'>I have been in practice for : 7+ Years</p>
       
       {/* Line */}
        <div className='h-[1px] w-[422px] ml-3 my-2 bg-[#D1D5D1]'></div>


        
        <div className="flex items-center mb-3 ml-3">
        <img className='h-[48px] w-[48px]' src="Frame 1000006268.svg" alt="img" />
        <span className='flex justify-between px-3 w-[628px] mt-4 h-[52px]'>
            <span className='flex flex-col justify-between'>
                <p className='text-[16px] text-[#333548] font-semibold'>Midtown Medical Clinic</p>
                <p className='text-[16px] text-[#33354880]'>Senior doctor</p>
            </span>
            <span>
                <p className='text-[16px] text-[#333548B5]'>2016-present</p>
            </span>
        </span>
        </div>
        <div className="flex items-center ml-3">
        <img className='h-[48px] w-[48px]' src="Frame 1000006268.svg" alt="img" />
        <span className='flex justify-between px-3 w-[628px] mt-4 h-[52px]'>
            <span className='flex flex-col justify-between'>
                <p className='text-[16px] text-[#333548] font-semibold'>Midtown Medical Clinic</p>
                <p className='text-[16px] text-[#33354880]'>Senior doctor</p>
            </span>
            <span>
                <p className='text-[16px] text-[#333548B5]'>2010-2015</p>
            </span>
        </span>
        </div>
    </div>

  
  
  </div>
  )
}

export default Exprience
