import { useDispatch } from "react-redux"
import AppRouter from "./router/AppRouter"
import { addUser } from "./features/Reducers/userSlice";
import { useEffect } from "react";
import { axiosInstance } from "./config/axiosinstance";

const App = () => {


  const dispatch = useDispatch();


  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("/api/user/me");
        console.log("res if /me", res.data.user)
        if (res) {
          dispatch(addUser(res?.data?.user))
        }
      } catch (error) {
        console.log("/me api error", error)
      }
    })()
  }, [dispatch]);

  return (
    <div>
      <div className="h-10 w-60 flex items-center pl-10 font-bold absolute z-[999] " >
        <h1 className="text-3xl bg-[#5FBDC0] px-4  py-2" >Work-<span className="text-red-500" >On</span></h1>
      </div>
      <AppRouter />
    </div>
  )
}

export default App
