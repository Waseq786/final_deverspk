import React from 'react'
import img from 'next/image'

const Footer = () => {
    return (
        <div>
            <script src="https://cdn.tailwindcss.com"></script>



            <div className='flex flex-col lg:flex-row lg:gap-[150px] bg-gray-700 w-[100%] mt-[120px] outline'>
                <div className='flex flex-col'>
                    <div className='justify-start'>
                        <div className='w-[200px] ml-2 mt-4 h-auto'>
                            <a href="/">
                                <img src="/logo.png" alt="Logo Picture" />
                            </a>

                        </div>
                    </div>

                    <div className='flex flex-row gap-4 ml-7 mt-6'>

                        <a href="https://www.facebook.com/profile.php?id=61552884845142&mibextid=ZbWKwL">
                            <img src="/facebook1.png" alt='FaceBook' className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]'>
                            </img>
                        </a>

                        <a href="https://instagram.com/deverspk?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                            <img src="/insta.png" alt='FaceBook' className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] '>
                            </img>
                        </a>


                        <img src="/linkedin.png" alt='FaceBook' className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]'>
                        </img>

                        <a href="https://x.com/deverspk?t=hazrGmnAnPoYZyERFo4RvQ&s=08">
                            <img src="/twitter.png" alt='FaceBook' className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]'>
                            </img>
                        </a>

                    </div>
                </div>
                <div className='text-white font-sans ml-7 mt-8 lg:mb-6'>
                    <h1 className='text-[22px] font-medium underline'>Services</h1>

                    <p className='text-[16px] mt-2'>Web Development</p>
                    <p className='text-[16px]'>Web Making</p>
                    <p className='text-[16px]'>Web Maintenance</p>
                    <p className='text-[16px]'>Logo Designer</p>
                    <p className='text-[16px]'>SEO</p>
                </div>

                <div className='text-white font-sans ml-7 mt-8 mb-6'>
                    <h1 className='text-[22px] font-medium underline'>Get In Touch</h1>

                    <li className='text-[16px] mt-2'>+92-3135114519 </li>
                    <p className='text-[16px] ml-6'>+92-3409514850</p>
                    <a href="mailto:deverspk.official@gmail.com" className='hover:text-[#bfb22e]'><li className='text-[16px]'>deverspk.official@gmail.com</li></a>
                    <li className='text-[16px]'>Rawalpindi, Punjab, Pakistan.</li>
                </div>



            </div>

        </div>
    )
}

export default Footer
