import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AddTodo from "./AddTodo";
const TodoList = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const resp = await axios.get("/getTodo");

    setList(resp.data);
    // if No users are there please dont set the value
  }; 
  console.log(list)
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <h1 className="text-[5rem] text-bold text-center mb-[2rem]">Todo List</h1>
        <AddTodo />
        {list &&
          list.map((todo) => (
            <div className="flex flex-row justify-between" key={todo._id}>
              <div>
              <ul className="w-4/5">{todo.title}</ul>
              <li className="w-2/5">{todo.task}</li>
              </div>
              <div className="flex flex-row justify-between w-[8rem]">
              <button className="hover:text-[#49b591] ease-in duration-200 text-[1.5rem] mr-[1rem]">EDIT</button>
              <button className="hover:text-[#d63737] ease-in duration-200 text-[1.5rem]">DELETE</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TodoList;
