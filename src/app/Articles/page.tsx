import React from 'react'
import Articles1 from '../../../components/articles1'
import Nevbar1 from '../../../components/nevbar1'
import Footer from '../../../components/footer'
const page = () => {
  return (

    <div>
      <script src="https://cdn.tailwindcss.com"></script>



      <div>

      <div className='fixed w-[100%] z-[1000] mt-[-160px] lg:mt-[-150px]'>
          <Nevbar1 />
        </div>
        
        <div>
          <Articles1 />
        </div>

        <div>
          <Footer/>
        </div>
        
      </div>

    </div>
  )
}

export default page
