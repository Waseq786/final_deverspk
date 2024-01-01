import React from 'react'
import img from 'next/image'

const Pic01 = () => {
  return (
    <div>
      <script src="https://cdn.tailwindcss.com"></script>

      <div className='mt-[70px] lg:mt-[165px] flex justify-center'>
        <img className='w-[90%] h-[50%] lg:w-[400px] lg:h-[330px] lg:mt-[-10px] lg:ml-64 lg:rounded-lg' src={'/slider02.jpg'}  alt='slider'></img>
      </div>
    
    </div>
  )
}

export default Pic01
