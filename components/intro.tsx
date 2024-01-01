import Image from 'next/image'
import React from 'react'

const Intro = () => {
    return (
        <div>
            <div>
                <div>
                    <div className='absolute -z-10 w-auto mx-4'>
                        <img src="/04.jpg" alt="..." className='w-auto lg:w-[1465px] lg:h-[480px] h-[1580px] object-cover'/>
                    </div>


                    <div className='grid grid-cols-1 lg:grid-cols-3 font-sans mx-12 gap-6 lg:gap-x-16 px-4 pt-4 mt-8'>
                        <div className='bg-black text-cyan-100 bg-opacity-30 p-4 rounded-lg hover:border-[5px] hover:border-cyan-100'>
                            <div className='text-[22px] font-medium mb-2 underline'>Web Developement</div>
                            <p className='text-justify'>DeversPk! A team of Web Developers with commitment to crafting modern, responsive and user-centric Websites.</p>
                        </div>

                        <div className='bg-black text-cyan-100 bg-opacity-30 p-4 rounded-lg hover:border-[5px] hover:border-cyan-100'>
                            <h1 className='text-[22px] font-medium mb-2 underline'>Web Designing</h1>
                            <p className='text-justify'>Team of DeversPk do not just Design Websites; We sculpt digital environments, manage a symphony of colors, shapes and interactions that resonate with user profound level</p>
                        </div>

                        <div className='bg-black text-cyan-100 bg-opacity-30 p-4 rounded-lg hover:border-[5px] hover:border-cyan-100'>
                            <h1 className='text-[22px] font-medium mb-2 underline'>Web Maintnenace</h1>
                            <p className='text-justify'>Web Maintenance is not just about fixing issues; it's about future proofing.We undertake the resposibility of Web Maintenance, ensuring websites remain at the forefornt of innovation and user experience.</p>
                        </div>

                        <div className='bg-black text-cyan-100 bg-opacity-30 p-4 rounded-lg hover:border-[5px] hover:border-cyan-100'>
                            <h1 className='text-[22px] font-medium mb-2 underline'>Exception Handling</h1>
                            <p className='text-justify'>Exception Handling is our commitment to digital excellence.We engineer solutions that not only trouble shoot unexpected issues but elevate the user experience by seamless addressing challanges as they arise. </p>
                        </div>

                        <div className='bg-black text-cyan-100 bg-opacity-30 p-4 rounded-lg hover:border-[5px] hover:border-cyan-100'>
                            <h1 className='text-[22px] font-medium mb-2 underline'>SEO</h1>
                            <p className='text-justify'>SEO is the art of storytelling, and We craft narratives that not only captivate users but also align seamlessly with search engine algorithms, making websites not just seen but remembered.</p>
                        </div>

                        <div className='bg-black text-cyan-100 bg-opacity-30 p-4 rounded-lg hover:border-[5px] hover:border-cyan-100'>
                            <h1 className='text-[22px] font-medium mb-2 underline'>Graphic & Logo Design</h1>
                            <p className='text-justify'>Graphic Designing is the alchemy of turning concepts into captivating visuals, and we specialized in creating graphics that not only catch the eye but tell stories.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
