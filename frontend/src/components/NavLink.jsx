import React from 'react'
import { ArrowUpRight, BriefcaseBusiness, FileText, Home, LayoutDashboard, Send, Settings, User, } from "lucide-react"
import { NavLink as RouterNavLink, useLocation, useNavigate, } from "react-router";
import { useDispatch } from "react-redux";
import { userLogoutApi } from '../features/Actions/userActions';


const navLink = [

    { label: "Home", icon: Home, to: "/home" },
    { label: "Dashboard", icon: LayoutDashboard, to: "/home/dashboard" },
    { label: "Profile", icon: User, to: "/home/profile" },
    { label: "Job", icon: BriefcaseBusiness, to: "/home/job" },
    { label: "applicants", icon: FileText, to: "/home/applicants" },
    { label: "Messages", icon: Send, to: "/home/messages" },
    { label: "Services", icon: ArrowUpRight, to: "/home/Services" },
    { label: "Settings", icon: Settings, to: "/home/settings" },

];


const NavLink = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation()

    const logoutUser = async () => {
        try {

            dispatch(userLogoutApi());
            navigate("/")

        } catch (error) {

            console.log("error in logout", error);
        }
    }

    return (
        <div className='h-screen w-60 flex  flex-col  gap-10 shadow-2xl border-1 border-gray-300 mt-10 pt-5 pl-3' >
            {navLink.map(({ label, icon: Icon, to }, idx) => (
                <RouterNavLink
                    key={label}
                    to={to}
                    className={({ isActive }) => `flex gap-5 pl-2 text-xl font-semibold ${to === location.pathname
                        ? "text-sky-700" : ""
                        }`}
                >
                    <Icon />
                    <span>{label}</span>

                </RouterNavLink>
            ))}
            <div className='flex gap-5 pl-2' >
                <h1 className='text-2xl text-red-600' ><i className="ri-logout-circle-line"></i></h1>
                <button
                    className='font-semibold text-xl text-red-600 underline '
                    onClick={logoutUser}
                >LogOut</button>
            </div>
        </div>
    )
}

export default NavLink;
