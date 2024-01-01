import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className='bg-[#2c3531] text-[#bfb22e] w-[100px] pt-[20px] pb-[20px] mt-[20px] ml-2 rounded-lg shadow-lg
        lg:shadow-2xl lg:shadow-black  shadow-black text-[12px] 
        lg:mt-[60px] lg:w-[200px] lg:h-[340px] lg:text-[20px] lg:py-[35px] lg:ml-4'>
            <ul className='flex flex-col items-center gap-4 
             lg:gap-4'>
                <li>
                   <a className='hover:underline' href="/">Home</a> 
                </li>
                <li>
                   <a className='hover:underline' href="/Aboutus">About Us</a> 
                </li>
                <li>
                   <a className='hover:underline' href="/Portfolio">Portfolio</a> 
                </li>
                <li>
                   <a className='hover:underline' href="/Services">Services</a> 
                </li>
                <li>
                   <a className='hover:underline' href="/Contacts">Contacts</a> 
                </li>
                <li>
                   <a className='hover:underline' href="/Articles">Articles</a> 
                </li>

            </ul>
        </div>
      
    </div>
  )
}

export default Sidebar


