import React,{ useState } from "react";
import { Content, Wrapper } from "./signup.style";
import Footer from "../Footer";

import { Link,useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import LanguageIcon from '@mui/icons-material/Language';

// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../firebase";
// import { login } from "../../features/userSlice";
import axios from "axios";



const Signup = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullname] = useState('');
    const [username, setusername] = useState('');
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUp = async(e) =>{
        e.preventDefault();

        {!fullName && alert('Please Enter Your Name!')}

        await axios.post("http://localhost:8000/api/v1/users/register",{fullName,email,password,username})

        .then((res)=>{
            console.log(res);
            const asd=fullName;
            console.log(asd);
            const UserStatus={
                lgn:"Log Out",
                name:asd,
              }
            navigate('/teslaaccount',{ state: { UserStatus } })
        }).catch((error) =>  {
            error.message.replace(".", "");
            alert(error.message + " (" + error.code + ")");
            document.getElementById("password").value = "";
        })

    }

    document.title='Tesla SSO - Register'
    return(
        <>
        <Wrapper>
            <div className="header" >
                <div>
                    <Link to='/'>
                        <img src="/images/logo.svg" alt="logo"/>
                    </Link>
                </div>
                <div className="lang" >
                    <LanguageIcon/> <span>en-US</span>
                </div>
            </div>

            <Content>
                <h1>Create Account</h1>
                <form>
                    <label htmlFor="text" >Full Name</label>
                    <input type='text' id='fname' value={fullName} onChange={(e)=> setFullname(e.target.value)} />
                    <label htmlFor="text" >username</label>
                    <input type='text' id='lname' value={username} onChange={(e)=> setusername(e.target.value)} />
                    <label htmlFor="email" >Email Address</label>
                    <input type='email' id="email" value={email} onChange={(e)=> setEmail(e.target.value) }/>
                    <label htmlFor="password">Password</label>
                    <input type='password' id="password" value={password} onChange={(e)=> setPassword(e.target.value) }/>

                    <button type="submit" onClick={signUp}>Create Account</button>
                </form>
                <div className="line" >
                    <hr/><span>OR</span><hr/>
                </div>

                <div>
                <Link to='/login'>
                    <button>Sign In</button>
                </Link>
                </div>
            </Content>
        </Wrapper>
        <Footer/>
        </>
    )
}

export default Signup