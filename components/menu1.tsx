import React from 'react'

const Menu1 = () => {
  return (
    <div>
                    <div className='flex flex-row text-[12px] lg:text-[20px] lg:mt-6 gap-2 lg:gap-8 lg:py-5 lg:px-10 justify-evenly'  >

                        <button className='hover:underline text-[#bfb22e] px-[5px]'><a href="/">Home</a></button>

                        <button className='hover:underline text-[#bfb22e] p-[5px]'><a href="/Aboutus">About Us</a></button>
                        
                        <button className='hover:underline text-[#bfb22e] p-[5px]'><a href="/Portfolio">Portfolio</a></button>

                        <button className='hover:underline text-[#bfb22e] p-[5px]'><a href="/Services">Services</a></button>

                        <button className='hover:underline text-[#bfb22e] p-[5px]'><a href="/Contacts">Contact Us</a></button>

                        <button className='hover:underline text-[#bfb22e] p-[5px]'><a href="/Articles">Articles</a></button>

                    </div>
                </div>
  )
}

export default Menu1
