import React,{ useState } from "react";
import { Content, Wrapper } from "./signup.style";
import Footer from "../Footer";

import { Link,useNavigate ,useLocation} from "react-router-dom";
// import { useDispatch } from "react-redux";
import LanguageIcon from '@mui/icons-material/Language';

// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../firebase";
// import { login } from "../../features/userSlice";
import axios from "axios";



const Order = () =>{

    const location=useLocation();
    const userData = location.state?.UserStatus || {};
    const[title,settitle]=useState(userData.name);
    const [email, setEmail] = useState('');
    const [contact, setcontact] = useState();
    const [fullName, setFullname] = useState('');
    const [address, setaddress] = useState('');
    const[query,setquery]=useState('');
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const orderNow = async(e) =>{
        e.preventDefault();

        {!fullName && alert('Please Enter Your Name!')}

        await axios.post("http://localhost:8000/api/v1/users/order",{title,fullName,email,contact,address,query})

        .then((res)=>{
            console.log(res);
            const asd=fullName;
            console.log(asd);
            const UserStatus={
                name:asd,
              }
              alert(" Order Place Successfully ");
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
                <h1>Order Now</h1>
                <form>
                    <label htmlFor="text" >Full Name</label>
                    <input type='text' id='fname' value={fullName} onChange={(e)=> setFullname(e.target.value)} />
                    <label htmlFor="text" >Contact No:</label>
                    <input type='number' id='lname' value={fullName} onChange={(e)=> setcontact(e.target.value)} />
                    <label htmlFor="email" >Email Address</label>
                    <input type='email' id="email" value={email} onChange={(e)=> setEmail(e.target.value) }/>
                    <label htmlFor="text">Address</label>
                    <input type='text' id="fname" value={fullName} onChange={(e)=> setaddress(e.target.value) }/>
                    <label htmlFor="text">Query</label>
                    <input type='text' id="fname" value={fullName} onChange={(e)=> setquery(e.target.value) }/>

                    <button onClick={orderNow}>Orger Now</button>
                
                </form>
                
            </Content>
        </Wrapper>
        <Footer/>
        </>
    )
}

export default Order