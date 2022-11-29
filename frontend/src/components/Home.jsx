import React from 'react'
import Login from './Login'
import Register from './Register'
import TodoList from './TodoList'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center  m-6 mt-[1rem]'>
      <h1 className='text-[3rem]  font-bold text-white my-5'>Todo App</h1>
        {/* <Login /> 
        <Register />
        */}
        <TodoList />
    </div>
  )
}

export default Home