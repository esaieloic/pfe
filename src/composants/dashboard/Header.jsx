import '../../styles/Header.css'
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { FaSmileWink } from "react-icons/fa";
import { RiMenuFold4Line } from "react-icons/ri"


function Header({stateSidebar}){
    return(
        <div className='containeur_header'>
            <div className='containeur_text'>
                <div className='icon_menu_containeur_text' onClick={stateSidebar}>
                    <RiMenuFold4Line className='icon_menu'/>
                </div>
                <span>Y'ello </span>
                <FaSmileWink className='icon_containeur_text'/>
            </div>
            <div className='search'>
                <input type="text" placeholder='search....'/>
                <MdOutlineSearch className='icon'/>
            </div>
            <div className='containeur_icon'>
                <IoMoon className='icon'/>
                <FaRegBell className='icon'/>
                <FaUserCircle className='icon'/>
            </div>
        </div>
    )
}


export default Header;