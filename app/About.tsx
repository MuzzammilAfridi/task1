import React from 'react'
import Intro from './Intro'
import Specialization from './Specialization'
import Test from './Test'
import Exprience from './Exprience'
import Review from './Review'
import Appointment from './Appointment'

const About = () => {
  return (
    <div className='mt-10 flex gap-6 w-[90vw] mx-auto '>
      <div className="flex flex-col gap-6">
        <Intro/>
       <Specialization/>
       <Test/>
       <Exprience/>
       <Review/>
       </div>
       <div className="">
      <Appointment/>
      </div>
      
    </div>
  )
}

export default About
