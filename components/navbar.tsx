import React from 'react'

const Navbar1 = () => {
  return (
    <div >

      <div className='flex flex-row  justify-end gap-3  lg:mt-[45px] lg:gap-8 lg:mr-[25px] mr-[15px]'>


        <div className='flex flex-row gap-1 lg:gap-2'>
          <img className='w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] '
            src="/whatsapp.png"
            alt="..."
          />
          <div className='text-[12px] text-[#bfb22e] lg:text-[18px] font-sans flex flex-row lg:flex-col text-end lg:mt-[-10px] gap-4 lg:gap-0'>
            <p>+ 92 - 3135114519  </p>
            <p>+ 92 - 3409514850</p>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Navbar1
