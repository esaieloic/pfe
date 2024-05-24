import { useState, useRef  } from 'react'
import '../../styles/Connexion.css'
import mtn_logo from '../../assets/logo_mtn.jpg'
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";



function Connexion(){

    const [title, setTitle] = useState("Login")

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const usernameRef = useRef(null)
    const firstnameRef = useRef(null)
    const lastnameRef = useRef(null)

    async function ResgisterUserRequest(){
        const data = {
            username : usernameRef.current.value,
            first_name : firstnameRef.current.value,
            last_name : lastnameRef.current.value,
            password : passwordRef.current.value,
            email : emailRef.current.value
        }
        
        const resetForm = () => {
            if (usernameRef.current) usernameRef.current.value = '';
            if (firstnameRef.current) firstnameRef.current.value = '';
            if (lastnameRef.current) lastnameRef.current.value = '';
            if (emailRef.current) emailRef.current.value = '';
            if (passwordRef.current) passwordRef.current.value = '';
        }

        const parameter = JSON.stringify(data)
        console.log(parameter)

        try {
            const response = await fetch("http://127.0.0.1:8000/myapi/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: parameter,
            });
    
            if (response.ok) {
                const result = await response.json();
                resetForm();
                return alert(`User created successfully: ${JSON.stringify(result)}`);
            } else {
                return alert('Error creating user');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the user.');
        }
    
    }
    
    function LoginApi(){
        console.log('Bonjour')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "Sign up") {
            ResgisterUserRequest();
        } else {
            LoginApi();
        }
    };

    function Divlastname(){
        return(
            <div className="input">
                <MdDriveFileRenameOutline  className='icon'/>
                <input id='lastname' type="text" placeholder="last name" name='lastname'  ref={lastnameRef} required/>                
            </div>
        )
    }
    
    function Divfirstname(){
        return(
            <div className="input">
                <MdDriveFileRenameOutline  className='icon'/>
                <input id='firstname' type="text" placeholder="first name" name='firstname' ref={firstnameRef} required/>                
            </div>
        )
    }
    
    function DivUsername(){
        return(
            <div className="input">
                <FaUserCircle  className='icon'/>
                <input id='username' type="text" placeholder="username" name='username' ref={usernameRef} required/>                
            </div>
        )
    }

    return(
        <div className='containeur'>
            <div className="containeur_image">
                <img src={mtn_logo} alt="logo de MTN CI"/>
            </div>
            <div className='containeur_loginsignup'>
                <div className='loginsignup'>
                    <form onSubmit={handleSubmit} >
                        <div className="Header">
                            <div className="text">{title}</div>
                            <div className="underline"></div>
                        </div>
                        <div className="Inputs_containeur">
                            {title ==="Sign up"? Divlastname() : null}
                            {title ==="Sign up"? Divfirstname() : null}
                            {title ==="Sign up"? DivUsername() : null}
                            <div className="input">
                                <MdEmail className='icon'/>
                                <input id="email" type="email" placeholder="email" name='email' ref={emailRef} required/>                
                            </div>
                            <div className="input">
                                <RiLockPasswordFill className='icon'/>
                                <input id="password" type="password" placeholder="password" name='password' ref={passwordRef} required/>                
                            </div>
                        </div>
                        <div className='btn_submit'>
                            <button>Sign in</button>
                        </div>
                        <div className="submit_containeur">
                            <div className={title === "Sign up"? "submit gris" : "submit"} onClick={()=> setTitle("Login")}>Login</div>  
                            <div className={title === "Login"? "submit gris" : "submit"} onClick={()=> setTitle("Sign up")}>Sign Up</div>                            
                        </div>
                        <div className="password_oublié">
                            Forgot your password ?<a href='LoginSignup.jsx'> Click Here !</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Connexion;