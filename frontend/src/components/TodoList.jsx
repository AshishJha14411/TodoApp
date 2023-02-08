import React, { useState, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import AddTodo from "./AddTodo";
import UserContext from "../context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
const TodoList = () => {
  const [list, setList] = useState([]);
  const [temp, setTemp] = useState()
  const {isAuth} = useContext(UserContext)
  const navigate = useNavigate()

  const fetchData = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'token': isAuth
    }
    const resp = await axios.get("http://localhost:4000/getTodo", {
      headers
    });
    console.log(resp.data.length)
    // if No users are there please dont set the value
    if(resp.data.length > 0){
      setList(resp.data);
    }
  }
  
 
  const deleteHandler = async (id) => {
    const headers = {
      'Content-Type': 'application/json',
      'token': isAuth
    }
    const response  = await axios.delete(`http://localhost:4000/delete/${id}`, {
      headers
    })
    setTemp(response)
    console.log(temp)
  }
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/login')
    }
    fetchData()
  }, [temp]);
  return (
    <>
      <div className="w-4/5 mx-auto">
        <h1 className="text-[5rem] text-bold text-center mb-[2rem]">Todo List</h1>
       
        {list &&
          list.map((todo) => (
            <div className="flex flex-row flex-wrap justify-between" key={todo._id}>
              <div>
              <ul className="w-3/5 flex-wrap">{todo.title}</ul>
              <li className="w-3/5 flex-wrap">{todo.task}</li>
              </div>
              <div className="flex flex-row justify-between w-[8rem]">
              <button className="hover:text-[#49b591] ease-in duration-200 text-[1.5rem] mr-[1rem]">EDIT</button>
              <button className="hover:text-[#d63737] ease-in duration-200 text-[1.5rem]"
              onClick={() => deleteHandler(todo._id)}
              >DELETE</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TodoList;
