import { useState } from "react";
import bgimage from "../images/bg-login.jpg"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userLoginApi } from "../features/Actions/userActions";
import { useNavigate } from "react-router";


const LoginPage = ({ setToggle }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [role, setrole] = useState("job seeker");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const userData = {
      ...data, role
    }
    const respones = await dispatch(userLoginApi(userData));
    if (respones) {
      console.log("user is login");
      navigate("/home")
    }
  }

  return (
    <>
      <div className=' h-screen w-screen flex items-center justify-center shadow-lg ' >
        <img
          className='h-screen w-screen absolute bg-cover bg-center'
          src={bgimage} alt="" />
        <div className='h-100 w-130 rounded-sm bg-[#59BDBB] border-1 border-white z-[999]' >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='h-[80%] w-full flex flex-col items-center justify-center ' >
            <h1 className="font-bold text-3xl" >Login</h1>
            <div className="flex gap-10 mt-4 " >
              <button
                type="button"
                onClick={() => setrole("job seeker")}
                className={`px-5 py-1 rounded-sm border-1
              ${role === "job seeker" ? "bg-[#175898]" : "bg-[#CBF1EE]"}
              `}
              >Job Seeker</button>
              <button
                type="button"
                onClick={() => setrole("employer")}
                className={`px-5 py-1  rounded-sm border-1
              ${role === "employer" ? "bg-[#175898]" : "bg-[#CBF1EE]"}
              `}
              >Employer</button>
            </div>
            <div className="flex items-center justify-center gap-4 pt-7 ">
              <h1 className="text-xl" ><i className="ri-mail-fill"></i></h1>
              <input
                {...register("email", { required: "Email is required" })}
                className='border-2 border-black px-5 py-2 rounded-lg outline-none'
                placeholder='email'
                type="email" />
            </div>
            {errors.email && (
              <span className="text-red-500" >{errors.email.message}</span>
            )}
            <div className="flex items-center justify-center gap-4 pt-7  ">
              <h1 className="text-xl" ><i className="ri-lock-fill"></i></h1>
              <input
                {...register("password", { required: "Password is required" })}
                className='border-2 border-black px-5 py-2 rounded-lg outline-none'
                placeholder='password'
                type="password" />
            </div>
            {errors.password && (
              <span className="text-red-500" >{errors.password.message}</span>
            )}
            <button
              className='border-2 px-8 py-2 rounded-sm font-bold text-white bg-black mt-5 cursor-pointer hover:bg-[#CBF1EE] hover:text-black '
            >Login </button>
          </form>
          <div className="flex items-center justify-center gap-2 " >
            <h1 className="text-4xl  hover:text-3xl " ><i className="ri-facebook-box-fill"></i></h1>
            <h1 className="text-4xl  hover:text-3xl " ><i className="ri-instagram-fill"></i></h1>
            <h1 className="text-4xl  hover:text-3xl " ><i className="ri-google-fill"></i></h1>
          </div>
          <div className="flex flex-col items-center justify-center text-center z-[999]" >
            <span className="flex gap-2 " >
              Don't have an account?
              <p
                className="text-blue-800 "
                onClick={() => setToggle((prev) => !prev)}
              >Sign Up</p>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage;
