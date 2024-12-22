import React from 'react'
import Profile from './Profile'
import About from './About'
import Appointment from './Appointment'

const Hero = () => {
  return (
    <div className='pb-10'>
      {/* <h1>Hii I am Hero</h1> */}
      <Profile/>
      <div className="flex justify-center max-w-screen">
      <About/>
      {/* <Appointment/> */}
      </div>
    </div>
  )
}

export default Hero
