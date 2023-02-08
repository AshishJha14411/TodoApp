import axios from "axios";
import React from "react";
import { useState } from "react";

import { useContext } from 'react';
import UserContext from '../context/UserContext/UserContext';
const AddTodo = () => {
    const {isAuth} = useContext(UserContext)



  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  
  const storeData = async() => {
    const headers = {
      'Content-Type': 'application/json',
      'token': isAuth
    }
    const data = {
      title,
      task
    }
    const res = await axios.post("http://localhost:4000/createTodo", data, {
      headers
    })
    console.log(res)
  }

const addTodoHandler = (e) =>{
  console.log(title,task)
  e.preventDefault()
  storeData()
  setTitle("")
  setTask("")
}
  return (
    <div>
      <input
        className="w-full mx-auto my-4 p-3"
        placeholder="Please Enter the Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full mx-auto my-4 p-3"
        rows="10"
        onChange={(e) => setTask(e.target.value)}
      />
      <button 
      onClick={addTodoHandler}
      className="ml-[45%] p-5 w-[10rem] text-white fond-extrabold bg-[#207398] rounded-full text-xl hover:bg-[#51E1ED] hover:text-black ease-in duration-200">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
