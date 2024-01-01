import React from 'react'
import Sidebar from '../../../components/sidebar'
import Nevbar1 from '../../../components/nevbar1'
import Contact from '../../../components/contact'
import Footer from '../../../components/footer'
const page = () => {
  return (

    <div>
      <script src="https://cdn.tailwindcss.com"></script>


      <div className='fixed w-[100%] z-[1000] lg:mt-[-150px] mt-[-160px]'>
        <Nevbar1 />
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default page
