import React from 'react'
import { Home, LayoutDashboard, Send, Settings, User, } from "lucide-react"
import { NavLink as RouterNavLink, useLocation, useNavigate, } from "react-router";


const navLink = [

    { label: "Home", icon: Home, to: "/home" },
    { label: "Dashboard", icon: LayoutDashboard, to: "/home/dashboard" },
    { label: "Profile", icon: User, to: "/home/profile" },
    { label: "Messages", icon: Send, to: "/home/messages" },
    { label: "Settings", icon: Settings, to: "/home/settings" },

];


const NavLink = () => {
    return (
        <div className='h-screen w-60 flex  flex-col gap-4 bg-green-200 pt-5 pl-3' >
            {navLink.map(({ label, icon: Icon, to }, idx) => (
                <RouterNavLink 
                key={label}
                to={to}
                 >
                 <div className='flex gap-2' >
                 <Icon/>
                    <span>{label}</span>
                 </div>
                </RouterNavLink>
            ))}
        </div>
    )
}

export default NavLink;
