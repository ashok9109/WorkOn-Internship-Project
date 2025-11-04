import React from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const ApplicantsPage = () => {
  return (
    <>
      <section className='min-h-screen w-screen flex flex-col items-center justify-center  bg-white ' >
        <div className='h-full w-full' >
          <h1 className='text-4xl'>Applicants Page</h1>
        </div>
        <Contact/>
        <Footer />
      </section>
    </>
  )
}

export default ApplicantsPage;

