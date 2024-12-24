import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center justify-between px-10 h-[10vh] shadow-lg'>
      <div>Logo</div>
      <div className='flex gap-5 ml-20'>
        <a href="/">Home</a>
        <a href="/finddoctor">Find Doctors</a>
        <a href="#">About</a>
        </div>
      <div className='space-x-5'>
        <button className='bg-cyan-600 px-6 py-2 rounded-sm'>Login</button>
        <button className='bg-cyan-900 text-white px-6 py-2 rounded-sm'>Sign Up</button>
      </div>
    </div>
  )
}

export default Nav
