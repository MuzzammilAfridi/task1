import React from 'react'
import Card from './Card'

const Search = () => {
  return (
    <div className="pb-3">
    <div className='w-screen  flex items-center justify-center flex-col gap-y-3 bg-[#EAF2EA] h-[220px] border'>
        <h2 className='text-[32px] text-center'>Find expert Doctors for an In-clinic session here </h2>
        <input type="" />
    </div>
    <span className='flex items-center justify-between px-3 gap-5 h-[70px] w-screen border border-[#EDEDED]'>
        <p>Hii</p>
        <p>Hlo</p>
        <p>Hola</p>
    </span>

    <span className='flex justify-end px-20 my-5 gap-5 '>
        <p className='px-[30px] py-[15px] bg-[#EAF2EA] rounded-[50px]'>Hair care</p>
        <p className='px-[30px] py-[15px] bg-[#EAF2EA] rounded-[50px]'>Femail</p>
        <p className='px-[30px] py-[15px] bg-[#EAF2EA] rounded-[50px]'>Rs.0-Rs.500</p>
        <p className='px-[30px] font-normal py-[15px] bg-[#EAF2EA] rounded-[50px]'>Hindi</p>
    </span>

    {/* Cards */}

    <div className="flex flex-wrap gap-5 justify-center">

    <Card/>
    <Card/>
    <Card/>

  

    
    </div>
    
    </div>
  )
}

export default Search
