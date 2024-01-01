import React from 'react'
import Aboutus from '../../../components/aboutus'
import Footer from '../../../components/footer'
import Nevbar1 from '../../../components/nevbar1'
const page = () => {
  return (

    <div>
        <script src="https://cdn.tailwindcss.com"></script>
        


      <div>

      <div className='fixed w-[100%] z-[1000]'>
          <Nevbar1 />
        </div>
        
        
          <div>
              <Aboutus />
          </div>

          <div>
            <Footer/>
          </div>

        
      </div>
    </div>
  )
}

export default page
