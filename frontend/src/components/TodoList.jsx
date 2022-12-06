import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const TodoList = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const resp = await axios.get("/getTodo");

    setList(resp.data);
    // if No users are there please dont set the value
  }; /* 
  console.log(list); */
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        {list &&
          list.map((todo) => (
            <div key={todo._id}>
              <ul>{todo.title}</ul>

              <li>{todo.task}</li>
            </div>
          ))}
      </div>
    </>
  );
};

export default TodoList;
