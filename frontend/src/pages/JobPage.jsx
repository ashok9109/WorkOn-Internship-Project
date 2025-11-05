import Contact from '../components/Contact';
import Footer from '../components/Footer';
import workon from '../images/work-on1.webp';
import workon2 from '../images/work-on2.jpg';


const JobPage = () => {
  return (
    <>
      <section className=' w-[84%] bg-white ' >
        <div className='h-screen w-full flex items-center justify-evenly  ' >

          {/* Left div */}
          <div className='h-[100%] w-[45%] pt-20 ' >
            <h1 className='text-4xl font-bold mt-30 ml-15 mb-4 ' >Find the perfect <br /> job for you </h1>
            <h3 className='opacity-[0.7] ml-15' >Fill your job in hours, not weeks. Search for free.</h3>
            <form className='h-[30%] w-[90%] flex items-center justify-center ml-10' >

              {/* search bar */}
              <div className='h-15 w-[90%] flex items-center rounded-3xl bg-gray-100' >
                <h1 className='text-2xl pl-3' ><i className="ri-search-eye-line"></i></h1>
                <input
                  className='pl-4 outline-0'
                  placeholder="Jobs title or keyword"
                  type="text" />
                <div className='h-full w-px bg-gray-400' />
                <select
                  className='outline-0 p-2'
                >
                  <option value="Bhopal">Bhopal</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Pune">Pune</option>
                  <option value="Ahemdabad">Ahemdabad</option>
                  <option value="other">other</option>
                </select>
                <button type='submit'
                  className='ml-2 px-5 py-2 rounded-xl bg-[#15803D]'
                >Search</button>
              </div>
            </form>
            <div className="text-gray-500 text-sm ml-16">
              Popular Searches:{" "}
              <span className="font-semibold text-black">
                Cloud Environments DBT, Content Editor
              </span>
            </div>
          </div>

          {/* Right div */}
          <div className='h-full w-[45%] flex items-center justify-center relative shadow-2xl ' >
            <div className='h-[70%] w-[80] relative border-3 rounded-2xl shadow-2xl ' >
              <div className='absolute left-5 top-10  flex items-center justify-center bg-white px-3 py-2 gap-3 rounded-lg' >
                <span className='text-yellow-600 ' >🔔</span>
                <span className='text-md' >Job Alert Subcribe</span>
                <span className='bg-yellow-500 px-2 rounded' >1</span>
              </div>
              <img
                className='h-full w-full object-cover rounded-lg'
                src={workon} alt="image" />
              <div className='absolute bottom-10 right-5 flex items-center justify-center bg-white px-3 py-2 gap-3 rounded-lg' >
                <span className='text-yellow-600 ' >5k+</span>
                <span className='text-md' >candidates get job</span>
                <img
                  className='h-10 w-10 rounded-4xl'
                  src={workon2} alt="" />
              </div>
            </div>
          </div>

          {/* svg */}
          <div className='absolute top-90 left-155  ' >
            <svg
              className=" w-200 h-30 text-green-700"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path d="M60,10 Q70,40 40,40 Q10,40 20,70" stroke="#15803d" strokeWidth="6" fill="none" />
            </svg>
          </div>
          <div className='absolute top-50 left-155  ' >
            <svg
              className=" w-200 h-30 text-green-700"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path d="M60,10 Q70,40 40,40 Q10,40 20,70" stroke="#15803d" strokeWidth="6" fill="none" />
            </svg>
          </div>
          <div className='absolute top-130 left-155  ' >
            <svg
              className=" w-200 h-30 text-green-700"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path d="M60,10 Q70,40 40,40 Q10,40 20,70" stroke="#15803d" strokeWidth="6" fill="none" />
            </svg>
          </div>
        </div>
        <Contact />
        <Footer />
      </section>
    </>
  )
}

export default JobPage
