import React from 'react'


const Contact = () => {
  return (
    <div>
      <div className='lg:mt-[150px] mt-[160px]'>

        <div className='absolute -z-10 w-full bg-cover'>
          <img src="/contact-us-1.jpg" alt="..." className='w-full h-[700px] lg:h-[600px]' />
        </div>

        <div className='bg-black bg-opacity-40 lg:h-[600px] h-[700px] text-white'>

          <div className='flex flex-col gap-10 text-center '>
            <h1 className='text-[50px] font-bold font-sans underline'>
              Contact Us
            </h1>

            <div className='flex lg:flex-row flex-col lg:justify-between gap-10' >

              <div className='flex flex-col gap-10 ml-10'>
                <div className='lg:text-[25px] text-[20px] flex flex-row gap-4 text-left'>
                  <img src="/contact-us-4.png" alt="..." className='w-[30px] h-[30px]' />
                  Call Us: <br /> <p className='font-sans'>+92-3135114519 <br /> +92-3409514850 <br /> +92-3351588510</p>
                </div>


                <a href="mailto:deverspk.official@gmail.com" className='hover:text-[#bfb22e]'>
                  <div className='lg:text-[25px] text-[20px] flex flex-row gap-4 text-left'>
                    <img src="/contact-us-6.png" alt="" className='w-[30px] h-[30px]' />
                    E-mail us at: <br />deverspk.official@gmail.com
                  </div>
                </a>


                <div className='lg:text-[25px] text-[20px] flex flex-row gap-4 text-left'>
                  <img src="/contact-us-5.png" alt="..." className='w-[25px] h-[35px]' />
                  Location: <br /> Rawalpindi, Punjab, Pakistan.
                </div>
              </div>



              <div className='flex flex-col gap-10 lg:text-end text-center lg:mr-[300px] text-[25px]'>

                <div className='lg:mr-[90px] font-sans text-[50px] font-bold lg:text-[30px] lg:font-serif underline'>Join us At</div>
                <div className='flex flex-row gap-8 lg:justify-end justify-around'>

                  <a href="https://www.facebook.com/profile.php?id=61552884845142&mibextid=ZbWKwL"><img src="facebook1.png" alt="..." className='w-[30px] h-[30px] lg:ml-[30px]' />
                  </a>

                  <a href="https://x.com/deverspk?t=hazrGmnAnPoYZyERFo4RvQ&s=08"><img src="twitter.png" alt="..." className='w-[30px] h-[30px] lg:ml-[30px]' />
                  </a>

                  <img src="linkedin.png" alt="..." className='w-[30px] h-[30px] lg:ml-[30px]' />

                  <a href="https://instagram.com/deverspk?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="><img src="insta.png" alt="..." className='w-[30px] h-[30px] lg:ml-[30px]' />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>
    </div >
  )
}

export default Contact
