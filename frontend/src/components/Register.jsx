import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    

  return (
    <div className='bg-[#03203C] mt-[5rem] w-2/5 flex flex-col rounded-[4%] justify-center'>
        <p className='text-[3rem] text-center font-semibold text-white my-5'>Registration</p>
        <input 
        className='w-3/5 mx-auto my-4 p-3'
        placeholder='Name'
        />
        <input 
        className='w-3/5 mx-auto my-4 p-3'
        placeholder='Email Address'
        />
        <input 
        className='w-3/5 mx-auto my-4 p-3'
        placeholder='Password'
        />
        <input 
        className='w-3/5 mx-auto my-4 p-3'
        placeholder='Confirm Password'
        />
        <button className='w-2/5 mx-auto mb-6 p-4 text-white fond-extrabold bg-[#205e98] rounded-full text-xl hover:bg-[#517ded] hover:text-black ease-in duration-200'>Register</button>
          <Link to='/login' >
        <button className='w-2/5 ml-[30%] mb-6 p-4 text-white fond-extrabold bg-[#205e98] rounded-full text-xl hover:bg-[#517ded] hover:text-black ease-in duration-200'>
          Login</button>
          </Link>
    </div>
  )
}

export default Register