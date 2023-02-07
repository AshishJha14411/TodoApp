import axios from 'axios';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {


  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerSubmitHandler = async (e) => {

    if(!firstname || !email || !password || !confirmPassword){
      alert("All the Fields are required except Last Name")
    }
    if(password<6){
      alert("Password must be 6 characters long")
    }
    if(password!==confirmPassword){
      alert("Password do not match")
    }
    const final = await axios.post(`http://localhost:4000/createUser`, {
      firstname,
      lastname,
      email,
      password
    })

    console.log(final)

  }
    

  return (
    <div className='bg-[#03203C] mt-[2rem] w-2/5 mx-auto flex flex-col rounded-[4%] justify-center'>
        <p className='text-[3rem] text-center font-semibold text-white my-5'>Registration</p>
        <input 
        className='w-3/5 mx-auto my-4 p-3'
        placeholder='First Name'
        type='text'
        name='fname'
        onChange={(e) => setfirstName(e.target.value)}
        id='fname'
        />
        <input 
        className='w-3/5 mx-auto my-4 p-3'
        placeholder='Last Name'
        type='text'
        name='lname'
        onChange={(e) => setlastName(e.target.value)}
        id='lname'
        />
        <input 
        className='w-3/5 mx-auto my-4 p-3'
        placeholder='Email Address'
        type='text'
        name='email'
        id='email'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        className='w-3/5 mx-auto my-4 p-3'
        placeholder='Password'
        type='password'
        name='password'
        onChange={(e) => setPassword(e.target.value)}
        id='password'
        />
        <input 
        className='w-3/5 mx-auto my-4 p-3'
        placeholder='Confirm Password'
        type='password'
        name='confirmpass'
        onChange={(e) => setConfirmPassword(e.target.value)}
        id='confirmpass'
        />
        <button className='w-2/5 mx-auto mb-6 p-4 text-white fond-extrabold bg-[#12B0E8] rounded-full text-xl hover:bg-[#517ded] hover:text-black ease-in duration-200' onClick={registerSubmitHandler}>Register</button>
          <Link to='/login' >
        <button className='w-2/5 ml-[30%] mb-6 p-4 text-white fond-extrabold bg-[#12B0E8] rounded-full text-xl hover:bg-[#517ded] hover:text-black ease-in duration-200'>
          Login</button>
          </Link>
    </div>
  )
}

export default Register