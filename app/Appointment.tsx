import React from 'react'

const Appointment = () => {
  return (
    <div className='w-[500px] border max-h-fit  py-6 rounded-lg'>

        {/* Appointment Fee */}
        <div className="flex justify-between px-3 h-[60px] w-[480px] mx-auto border items-center rounded-3xl font-semibold text-[20px]">
            <p>Appointment Fee</p>
            <p className='text-[#3A643B]'>₹699.00</p>
        </div>

        <p className='my-5 pl-3 text-[20px] font-bold'>Select your mode of session</p>


        <div className="w-[480px] mx-auto flex justify-center items-center gap-2 h-[78px]">
            <span className='w-[150px] h-[78px] flex flex-col rounded-md items-center justify-center border border-[#E5E5E5]'>
                <p className='text-[#1F1F1F] text-[16px] font-semibold'>In-Clinic</p>
                <p className='text-[#606060] font-normal text-[16px]'>45 Mins</p>
            </span>
            <span className='w-[158px] h-[78px] flex flex-col rounded-md bg-[#3a643b5b] items-center justify-center border '>
                <p className='text-[#3A643B] text-[16px] font-semibold'>Video</p>
                <p className='text-[#606060] font-normal text-[16px]'>45 Mins</p>
            </span>
            <span className='w-[150px] h-[78px] flex flex-col rounded-md items-center justify-center border '>
                <p className='text-[#1F1F1F] text-[16px] font-semibold'>Chat</p>
                <p className='text-[#606060] font-normal text-[16px]'>10 Mins</p>
            </span>
        </div>

        {/* Time Slot */}

        <div className="h-[550px]">
            <p className='text-[20px] font-bold text-black my-3 ml-3'>Pick a Time slot</p>
            <div className="border flex gap-4 items-center mx-auto justify-center w-[470px] h-[123px] rounded-lg">
                <span className='flex items-center justify-center flex-col h-[80px] w-[110px] border border-[#3A643B] bg-[#F2FBF2] rounded-lg'>
                    <p className='text-[16px] font-semibold text-[#3A643B] '>Mon, 10 Oct</p>
                    <p className='text-[#818181]'>10 slots</p>
                </span>
                <span className='flex items-center justify-center flex-col h-[80px] w-[110px] border border-[#3A643B] bg-[#F2FBF2] rounded-lg'>
                    <p className='text-[16px] font-semibold text-[#3A643B] '>Mon, 10 Oct</p>
                    <p className='text-[#818181]'>10 slots</p>
                </span>
                <span className='flex items-center justify-center flex-col h-[80px] w-[110px] border border-[#3A643B] bg-[#F2FBF2] rounded-lg'>
                    <p className='text-[16px] font-semibold text-[#3A643B] '>Mon, 10 Oct</p>
                    <p className='text-[#818181]'>10 slots</p>
                </span>
            </div>


            {/* Morning */}
            <div className=" mt-3 pt-3 flex-col flex gap-4 pl-3 w-[490px] min-h-[181px] pb-4 rounded-lg">

                <p className='text-[18px] font-semibold text-black'>Morning</p>

                <div className="flex items-center flex-wrap gap-3">
                    <span className='flex items-center justify-center w-[100px] border border-[#EBEBEB] rounded-3xl h-[67px]'>
                        <p className=' leading-[]'>09:00 AM</p>
                    </span>
                
                </div>

            </div>



            {/* Evening */}


            <div className=" mt-3 pt-3 flex-col flex gap-4 pl-3 w-[490px] min-h-[181px] pb-4 rounded-lg">

<p className='text-[18px] font-semibold text-black'>Evening</p>

<div className="flex items-center flex-wrap gap-3">
    <span className='flex items-center justify-center w-[100px] border border-[#EBEBEB] rounded-3xl h-[67px]'>
        <p className=' leading-[]'>09:00 AM</p>
    </span>

</div>

</div>



            

        </div>

        <div className="w-[500px] flex items-center justify-center">
        <button className='w-[470px] mx-auto h-[59px] text-white bg-[#3A643B] rounded'>Make An Appointment</button>
        </div>
    </div>
  )
}

export default Appointment
