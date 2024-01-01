import React from 'react'
import Aboutus1 from './aboutus1'

const Aboutus = () => {
    return (
        <div className='flex flex-col gap-4'>


            <div>
                <Aboutus1 />
            </div>

           
            <div className='flex lg:flex-row flex-col lg:gap-0 gap-8 lg:justify-between'>
                <div className='mt-[30px] w-auto ml-4 lg:mt-[70px] lg:w-[60%]'>
                    <span className='text-[25px]  lg:text-4xl font-bold'> Mission and Values:</span><br />

                    <p className='text-[18px] mt-[5px] mr-5 text-justify lg:mt-[15px] lg:text-2xl'>At <span className='text-[#bfb22e] font-bold'>DeversPk</span>, our mission is to empower businesses and individuals by creating innovative and visually stunning web solutions. We are dedicated to delivering cutting-edge web development, seamless design, reliable maintenance, and distinctive logo designs that not only meet but exceed the expectations of our clients. Through our expertise and passion for digital excellence, we strive to enhance our clients' online presence, foster growth, and leave a lasting impact in the digital landscape.</p>
                </div>

                <div className='lg:mt-[100px] lg:ml-0 ml-1 lg:mr-14'>
                    <img src="/about-us-1.jpg" alt="..." className='w-[400px] h-[250px] rounded-2xl' />
                </div>
            </div>

        </div>
    )
}

export default Aboutus
