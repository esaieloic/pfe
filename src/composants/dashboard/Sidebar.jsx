import '../../styles/Sidebar.css';
import logo_profile from '../../assets/profile_user.jpg';
import { MdOutlineMenuOpen } from "react-icons/md";
//import { RiMenuUnfold3Line2 } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { BiServer } from "react-icons/bi";
import { AiOutlineApi } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
//import { useState } from 'react';



function Sidebar({openSidebar, stateSidebar}){

    return(
        <div className={openSidebar ? 'containeur_sidebar' : 'containeur_sidebar containeur_sidebar_responsive'}>
            <div className="header_sidebar">
                <div className='header_text'>
                    <MdOutlineMenuOpen  className='header_icon menu' onClick={stateSidebar}/>
                    <span>ADMINISTRATOR</span>
                </div>
                <div className='underline_header_sidebar'></div>
            </div>

            <div className='profile_sidebar'>
                <img src={logo_profile} alt="logo du profile" />
                <span>Esaïe-Loïc [MTN-CI]</span>
            </div>

            <div className='navigation_sidebar'>
                <span>Navigation</span>
                <div className='underline_nav_sidebar'></div>
                <ul class="list_nav">
                    <li>
                        <a href="/dashboard">
                            <IoHome className='nav_icon'/>
                            <span class="text_nav">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/user">
                            <FaUserGroup className='nav_icon'/>
                            <span class="text_nav">Users</span>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/application">
                            <AiOutlineApi className='nav_icon'/>
                            <span class="text_nav">Applications</span>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard/server">
                            <BiServer className='nav_icon'/>
                            <span class="text_nav">Servers</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='footer_sidebar'>
                <span>Account</span>
                <div className='underline_footer_sidebar'></div>
                <ul class="list_nav">
                    <li>
                        <a href="/dashboard/profile">
                            <FaUserCircle className='footer_icon0'/>
                            <span class="text_nav">My Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <TbLogout2 className='footer_icon'/>
                            <span class="text_nav">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Sidebar;