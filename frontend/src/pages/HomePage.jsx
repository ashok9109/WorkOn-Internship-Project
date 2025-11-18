import Homepng from '../images/Home-page1.webp'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
      <section className=' w-full flex flex-col bg-gray-100 ' >
        <div className="h-screen w-full flex flex-col-reverse md:flex-row items-center justify-evenly gap-20  md:px-16 ">

          {/* Left Content */}
          <div className=" h-full w-[60%] flex-1 flex flex-col items-start justify-center   ">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
              Find Your <span className="text-[#0A3D4C]">Dream <span className='text-red-500' > Job </span> </span><br />
              With Your Interest<br />And Skills
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              A job portal designed to connect talented job seekers with top employers. Users can create profiles, upload resumes, explore job listings, and apply with just one click. Employers can easily post jobs, manage applicants, and find the right talent efficiently.
            </p>
            <div className="flex flex-row items-center gap-6 mb-6">
              <button className="bg-[#0A3D4C] hover:bg-[#00BBA7] text-white font-semibold px-8 py-3 rounded-full shadow transition">
                Discover Jobs
              </button>
              <div className="bg-gray-100 px-6 py-2 rounded-xl flex flex-col items-center border shadow">
                <span className="font-bold text-[#0A3D4C] text-lg">200+</span>
                <span className="text-xs text-gray-500 font-semibold">Happy Active Users</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="h-full w-[20%]  flex-1 flex justify-center items-center  mb-8 md:mb-0 ml-20 ">
            <div className="w-[320px] h-[380px] bg-gradient-to-br from-white to-blue-50 border rounded-3xl shadow-lg flex items-center justify-center relative">
              <img
                src={Homepng}
                alt="laptop"
                className="object-cover w-[94%] h-[94%] rounded-2xl hover:scale-[1.1] transition "
              />
              <div className="absolute top-6 right-6 bg-white border rounded-lg px-4 py-2 shadow flex items-center gap-2">
                <span className="bg-blue-100 text-[#0A3D4C] px-2 py-1 rounded-md text-xs font-bold">
                  ✅ 99% Job Success
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage



