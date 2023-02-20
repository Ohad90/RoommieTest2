import React,{useState} from 'react';
import axios from "axios";
import { useRouter } from 'next/router';
import { Button,Box} from '@chakra-ui/react';
import {BiUser} from 'react-icons/bi';
import {AiFillLock} from 'react-icons/ai';
import {toast} from 'react-toastify';

const Login = () => {
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const [pageType,setPageType] = useState("login");
  const isLogin = pageType === 'login';
  const isRegister = pageType === "register";
  const [rememberMe,setRememberMe] = useState(false);
  const handleCheck = (event) => {
    setRememberMe(event.target.checked);
  };

    const [loginUserName, setloginUserName] = useState('');
    const [loginPassword, setloginPassword] = useState('');

    const login = () => {
      axios({
        method: "post",
        data: {
          username: loginUserName,
          password: loginPassword,
        },
        withCredentials: true,
        url: "http://localhost:3000/api/login"
      }).then(() =>{
        setSuccess(true);
        toast.success("Login Successfully !",{
          position:'top-center',
          autoClose:5000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
          theme:'colored',
        },router.push("/Home"));
      })
      .catch((error) =>{
        toast.error(error.response.data.error,{
          position:'top-center',
          autoClose:5000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
          theme:'colored',
        });
      });
    }

    
  return (
    <div className="test">
      <Box>
            
            <div className="roommie">
              <p>R</p>
              <p>O</p>
              <p>O</p>
              <p>M</p>
              <p>M</p>
              <p>I</p>

              <div className="title">
                <div className="e"></div>
                <div className="e"></div>
                <div className="e"></div>
              </div>
            </div>
            
        </Box>
    <div className="container">
    <div className="form">
      <h2>Login</h2>
      <div className="inputBox">
        <input type="text" name="username" required="required" onChange={e =>setloginUserName(e.target.value)}/>
        <i><BiUser/></i>
        <span>Username</span>
      </div>
      
      <div className="inputBox">
        <input type="password" name="password" required="required" onChange={e =>setloginPassword(e.target.value)}/>
        <i><AiFillLock/></i>
        <span>Password</span>
        
      </div>
        <Button className='btn' onClick={login}>Login</Button>
      <p>Not Registered ? <a href="Register">Create a new account</a></p>
    </div>
    <div className="form signin">
    </div>
  </div>
  </div>
  
  )
}

export default Login;