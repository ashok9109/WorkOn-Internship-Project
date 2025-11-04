import Contact from '../components/Contact'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <div className='min-h-screen w-screen' >-
       <section className="w-full min-h-[80vh] bg-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-12">
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
          Find Your <span className="text-blue-600">Dream Job</span><br />
          With Your Interest<br />And Skills
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Search for jobs by interest, location or experience and get matched instantly to companies hiring your skillset.
        </p>
        <div className="flex flex-row items-center gap-6 mb-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow transition-all">
            Discover Jobs
          </button>
          <div className="bg-gray-100 px-6 py-2 rounded-xl flex flex-col items-center border shadow">
            <span className="font-bold text-blue-600 text-lg">200+</span>
            <span className="text-xs text-gray-500 font-semibold">Happy Active Users</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
        <div className="w-[320px] h-[380px] bg-gradient-to-br from-white to-blue-50 border rounded-3xl shadow-lg flex items-center justify-center relative">
          {/* You can use a sample image or replace with your own */}
          <img
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=400"
            alt="Woman with laptop"
            className="object-cover w-[94%] h-[94%] rounded-2xl"
          />
          {/* Example badge */}
          <div className="absolute top-6 right-6 bg-white border rounded-lg px-4 py-2 shadow flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-bold">
              ✅ 99% Job Success
            </span>
          </div>
        </div>
      </div>
    </section>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default HomePage



