import React from 'react'

const Intro = () => {
  return (
    <div className='h-[270px] pb-5  w-[628px] border shadow  bg-cyan-200'>
      <div className="flex  bg-cyan-500 py-3 rounded-t-md  items-center justify-between ">
        <p className='ml-3'>A Little About Me</p>
        <button className='mr-3 border py-2 px-3 rounded'>Follow +</button>
      </div>
      <p className='px-4 pt-2'>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>
      <hr className='border inline-block mt-2 w-[80%] border-gray-600' />
      <span><button className='ml-2 underline text-gray-600'>Read more</button></span>
      <div className="flex pl-4 gap-4">
        <span className='font-semibold'>Language Spoken</span>
        <span className='bg-gray-200 px-3 py-1 rounded-3xl'>English</span>
        <span className='bg-gray-200 px-3 py-1 rounded-3xl'>Hindi</span>
        <span className='bg-gray-200 px-3 py-1 rounded-3xl'>Telugu</span>
      </div>
      <div className="flex pl-4 pb-2 mt-4 gap-5">
        <img className='h-[40px]' src="Frame 1000006076.svg" alt="img" />
        <img className='h-[40px]' src="Frame 1000006077.svg" alt="img" />
        <img className='h-[40px]' src="Frame 1000006078.svg" alt="img" />
        <img className='h-[40px]' src="Frame 1000006079.svg" alt="img" />
      </div>
    </div>
  )
}

export default Intro
