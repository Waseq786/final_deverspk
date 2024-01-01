import Image from 'next/image'
import Paragragh from '../../components/paragraph'
import Pic01 from '../../components/pic01'
import Intro from '../../components/intro'
import Nevbar1 from '../../components/nevbar1'
import Footer from '../../components/footer'

export default function Home() {
  return (

    <main className="">

      <>
        <script src="https://cdn.tailwindcss.com"></script>



        <div className='fixed w-[100%] z-[1000]'>
          <Nevbar1 />
        </div>

        <div className='flex flex-col lg:flex-row'>

          <div>
            <div>
              <Paragragh />
            </div>

          </div>


          <div>
            <Pic01 />
          </div>
        </div>

        <div>
          <Intro />
        </div>

        <div>
          <Footer/>
        </div>
      </>
    </main>
  )
}
