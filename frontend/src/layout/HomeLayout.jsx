import { Outlet } from "react-router";
import NavLink from "../components/NavLink";


const HomeLayout = () => {
  return (
    <div className="flex" >
    <div className="mt-15" >
      <NavLink />
    </div>
      <Outlet/>
    </div>
  )
}

export default HomeLayout;
