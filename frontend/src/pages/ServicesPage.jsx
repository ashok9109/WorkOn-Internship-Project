import React from 'react'
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ServicesPage = () => {
  return (
    <>
      <section className='min-h-screen w-screen flex flex-col items-center justify-center bg-gray-200  bg-white  ' >
        <div className='h-full w-full' >
          <h1 className='text-4xl'>Servies Page</h1>
        </div>
        <Contact/>
        <Footer />
      </section>
    </>
  )
}

export default ServicesPage;
