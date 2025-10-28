import React from 'react'
import { useForm } from 'react-hook-form';

const ProfilePage = () => {

  const { register, handleSubmit, reset, formState: { error } } = useForm();


  const onSubmit = (Data) => {
    console.log("profile data", Data)
  }

  return (
    <>
      <div className='min-h-screen w-full bg-gray-200 rounded-lg pt-10 pl-30 pr-30 '  >
        <h1 className='text-3xl mb-10 underline text-center' >Profile Settings</h1>
        <div className='min-h-screen w-full bg-[#FFFFFF] ' >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='h-full w-full flex flex-col items-center justify-center'
          >
            <h1 className='text-3xl pt-4  mb-4 ml-7 ' >Basic Informations</h1>
            <div className=' h-70 w-full flex gap-10 p-5 '  >

              {/* Profile photo */}
              <div className='h-30 w-40  flex flex-col ml-10' >
                <label htmlFor="photo" >Your Photo</label>
                <input
                  {...register("photo")}
                  className=' text-center px-6 py-17 rounded-lg border-1 border-[#F9F9F9] bg-gray-100'
                  type="file" id='photo' placeholder='image' />
                <h1>Maximum file size: 1400kb.</h1>
              </div>

              {/* Cover Image */}
              <div className='h-30 w-full  flex flex-col' >
                <label htmlFor="coverImage" >Cover Image</label>
                <input
                  {...register("coverImage")}
                  className='w-180 text-center px-6 py-17 rounded-lg border-1 border-[#F9F9F9] bg-gray-100'
                  type="file" id='photo' placeholder='image' />
                <h1>The cover image size should be max 1920 x 400px</h1>
              </div>
            </div>
            <div className='h-30 w-full flex items-center justify-center gap-20' >

              {/* First Name */}
              <div className='h-20 w-[38%] flex flex-col ' >
                <label htmlFor="firstName" className="block mb-1 font-medium" >First Name</label>
                <input
                  {...register("firstName")}
                  className='px-5 py-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                  type="text" id='firstName' placeholder='first Name' />
              </div>

              {/* Last Name */}
              <div className='h-20 w-[38%] flex flex-col ' >
                <label htmlFor="lastName" className="block mb-1 font-medium" >Last Name</label>
                <input
                  {...register("lastName")}
                  className='px-5 py-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                  type="text" id='lastName' placeholder='Last Name' />
              </div>
            </div>
            <div className='h-30 w-full flex items-center justify-center gap-20' >

              {/* Email */}
              <div className='h-20 w-[38%] flex flex-col ' >
                <label htmlFor="email" className="block mb-1 font-medium" >Email Address</label>
                <input
                  {...register("email")}
                  className='px-5 py-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                  type="text" id='email' placeholder='name@gmail.com' />
              </div>

              {/* Phone Number */}
              <div className='h-20 w-[38%] flex flex-col ' >
                <label htmlFor="number" className="block mb-1 font-medium" >Phone number</label>
                <input
                  {...register("number")}
                  className='px-5 py-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                  type="tel" placeholder='Enter phone number' />
              </div>
            </div>

            {/* Description */}
            <div className='h-40 w-full flex flex-col items-center jsutify-center ' >
              <label htmlFor="description" className="block mb-1 font-medium" >Description</label>
              <textarea
                {...register("description")}
                rows={5}
                className='h-30 w-[75%] px-4 pt-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                id="description" placeholder='Write a short bio or description' ></textarea>
            </div>
            <div className='h-30 w-full flex items-center justify-center gap-20' >

              {/* Date of Bith */}
              <div className='h-20 w-[38%] flex flex-col ' >
                <label htmlFor="dob" className="block mb-1 font-medium" >Date of Birth</label>
                <input
                  {...register("dob")}
                  className='px-5 py-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                  type="date" id='dob' placeholder='first Name' />
              </div>

              {/* Age */}
              <div className='h-20 w-[38%] flex flex-col ' >
                <label htmlFor="age" className="block mb-1 font-medium" >Age</label>
                <select
                  {...register("age")}
                  className='px-5 py-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                >
                  <option value="18-24">18 - 24</option>
                  <option value="25-30">25 - 30</option>
                  <option value="31-40">31 - 40</option>
                  <option value="40+">40+</option>
                </select>
              </div>
            </div>
            <div className='h-30 w-full flex items-center justify-center gap-20' >

              {/* Gender */}
              <div className='h-20 w-[38%] flex flex-col ' >
                <label htmlFor="gender" className="block mb-1 font-medium" >Gender</label>
                <select
                  {...register("gender")}
                  className='px-5 py-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Languages */}
              <div className='h-20 w-[38%] flex flex-col ' >
                <label className="block mb-1 font-medium">Languages</label>
                <select
                  {...register("languages")}
                  className='px-5 py-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className='h-30 w-full flex items-center justify-center gap-20' >

              {/* Qualifications */}
              <div className='h-20 w-[38%] flex flex-col ' >
                <label className="block mb-1 font-medium">Qualification</label>
                <select
                  {...register("qualification")}
                  className='px-5 py-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                >
                  <option value="Bachelor Degree">Bachelor Degree</option>
                  <option value="Master Degree">Master Degree</option>
                  <option value="PhD">PhD</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>

              {/* Years of Experience */}
              <div className='h-20 w-[38%] flex flex-col ' >
                <label className="block mb-1 font-medium">Years of Experience</label>
                <select
                  {...register("experience")}
                  className='px-5 py-3 rounded-sm outline-0 border-1 border-gray-300 bg-[#FFFFFF]'
                >
                  <option value="">Select an option</option>
                  <option value="0-1">0-1</option>
                  <option value="2-5">2-5</option>
                  <option value="6-10">6-10</option>
                  <option value="10+">10+</option>
                </select>
              </div>
            </div>

            {/* Resume */}
              <div className='h-30 w-full mt-5 ml-22 flex flex-col ml-42  ' >
                <label htmlFor="resume" className='mb-4'  >Resume</label>
                <input
                  {...register("resume")}
                  className='w-50 text-center px-2 py-2 rounded-lg border-1 border-[#F9F9F9] bg-gray-100'
                  type="file" id='photo' placeholder='Resume' />
                <h1 className='mt-3' >Upload File: PDF</h1>
              </div>
              <button className=' px-4 py-2 bg-sky-700 rounded-sm mt-10 mb-10' >Save</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProfilePage;
