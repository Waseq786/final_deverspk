import React from 'react'
import Services from '../../../components/services'
import Footer from '../../../components/footer'
import Nevbar1 from '../../../components/nevbar1'
const page = () => {
  return (

    <div>
      <script src="https://cdn.tailwindcss.com"></script>


      <div>

      <div className='fixed w-[100%] z-[1000] mt-[-160px] lg:mt-[-150px]'>
          <Nevbar1 />
        </div>
        
        <div>
          <Services/>
        </div>

        <div>
          <Footer/>
        </div>
        
      </div>

    </div>
  )
}

export default page
