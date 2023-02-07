import React, {useState} from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import UserContext from '../context/UserContext/UserContext';
const Login = () => {

  const {setIsAuth, isAuth} = useContext(UserContext)
  const navigate = useNavigate()
  
  if(isAuth){
    navigate('/')
  }

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const loginHandler = async(e) => {
    const loginData = await axios.post(`http://localhost:4000/login`, {
      email,
      password
    })
    localStorage.setItem("token",loginData.data.token)
    
    setIsAuth(localStorage.getItem("token"))
    console.log(localStorage.getItem("token"))
  }
  return (
    <div className="bg-[#03203C] mt-[2rem] mx-auto w-2/5 flex flex-col rounded-[4%] justify-center">
      <h1 className="text-[3rem] text-center font-bold text-white my-5">
        Login
      </h1>
      <input className="w-3/5 mx-auto my-4 p-3" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
      <input className="w-3/5 mx-auto my-4 p-3" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button className="w-2/5 mx-auto my-6 p-4 text-white fond-extrabold bg-[#12B0E8] rounded-full text-xl hover:bg-[#51E1ED] hover:text-black ease-in duration-200" onClick={loginHandler}>
        Login
      </button>
      <Link to='/register' >
        <button className='w-2/5 ml-[30%] mb-6 p-4 text-white fond-extrabold bg-[#12B0E8] rounded-full text-xl hover:bg-[#517ded] hover:text-black ease-in duration-200'>
          Register</button>
          </Link>
    </div>
  );
};

export default Login;
