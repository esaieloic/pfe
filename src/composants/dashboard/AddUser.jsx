import * as React from 'react'
import '../../styles/Connexion.css'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


function AddUser() {
  return (
    <div className='loginsignup'>
        <form action="">
            <div className="Header">
                <div className="text" style={{fontSize: '25px'}}>Add New User</div>
                <div className="underline"></div>
            </div>
            <div className="Inputs_containeur">
                <div className="input">
                    <MdDriveFileRenameOutline  className='icon'/>
                    <input type="text" placeholder="last name" name='lastname' required/>                
                </div>
                <div className="input">
                    <MdDriveFileRenameOutline  className='icon'/>
                    <input type="text" placeholder="first name" name='firstname' required/>                
                </div>
                <div className="input">
                    <FaUserCircle  className='icon'/>
                    <input type="text" placeholder="username" name='username' required/>                
                </div>
                <div className="input">
                    <MdEmail className='icon'/>
                    <input id="email" type="email" placeholder="email" name='email' required/>                
                </div>
                <div className="input">
                    <RiLockPasswordFill className='icon'/>
                    <input id="password" type="password" placeholder="password" name='password' required/>                
                </div>
            </div>
            <div className='btn_submit'>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddUser