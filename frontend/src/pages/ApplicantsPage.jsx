import React from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const ApplicantsPage = () => {
  return (
    <>
      <section className='min-h-full w-screen flex flex-col items-center justify-center  bg-gray-100 ' >
        <div className='h-screen w-full' >
          <h1 className='text-4xl'>Applicants Page</h1>
        </div>
        <Contact/>
        <Footer />
      </section>
    </>
  )
}

export default ApplicantsPage;

