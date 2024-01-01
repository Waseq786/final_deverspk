import React from 'react'
import Portfo1 from '../../../components/portfo1'
import Nevbar1 from '../../../components/nevbar1'
import Footer from '../../../components/footer'
const page = () => {
  return (

    <div>
      <script src="https://cdn.tailwindcss.com"></script>



      <div>

      <div className='fixed w-[100%] z-[1000] lg:mt-[-150px] mt-[-160px]'>
          <Nevbar1 />
        </div>

        <div>
          <Portfo1/>
        </div>

        <div>
          <Footer/>
        </div>

      </div>


    </div>
  )
}

export default page
