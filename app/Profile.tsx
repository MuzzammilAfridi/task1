import React from 'react'

const Profile = () => {
  return (
    <div className=' relative top-7  rounded-t h-48 w-[90vw] mx-auto border border-gray-400 shadow'>
      <div className="h-[45%] w-full  rounded-t overflow-hidden">
        <img className='h-full object-center object-cover w-full' src="./banner.png" alt="img" />
      </div>
      <div className="h-[55%] w-full ">

        <div className="flex h-full justify-between px-5 items-center">
        <div className="flex h-full gap-4">
            <img className='h-[80px] ml-5 relative bottom-4 w-[80px] rounded-full border-2 border-white object-cover' src="https://images.unsplash.com/photo-1723179343134-634c9eadde39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="img" />
            <div className="text-slate-600  flex flex-col h-full  justify-center">
                {/* Name */}
                <p className='font-semibold'>Dr.Bruce Willis</p>
                <p>Gynocologist</p>
                <p>4.2 ****</p>
            </div>
        </div>

        <div className="flex gap-8 text-center text-zinc-950">
            <span>
            <p>Followers</p>
            <p className='font-semibold'>850</p>
            </span>
            <span>
            <p>Following</p>
            <p className='font-semibold'>18K</p>
            </span>
            <span>
            <p>Posts</p>
            <p className='font-semibold'>250</p>
            </span>
        </div>
        <div className="">
            <button className='text-white bg-green-800 px-5 py-2'>Book an Appointment</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
