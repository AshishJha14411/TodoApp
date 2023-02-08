import React from "react";
import { Link } from "react-router-dom";

import UserContext from '../context/UserContext/UserContext';
import { useContext } from "react";
import { useEffect } from "react";
const NavBar = () => {
  
  const {setIsAuth, isAuth, logoutHandler} = useContext(UserContext)
  

  const authLinks = (
    <>
      <div className="flex w-full bg-[#03203C] text-white text-[1.5rem] py-[2rem] bg justify-around">
        <Link to="/addtodo">
          <button className="w-full py-4 px-8 text-white fond-extrabold  hover:rounded-lg text-xl hover:bg-[#517ded] hover:text-black ease-in-out duration-300">
            Add Todo
          </button>
        </Link>
        <Link to="/">
          <button className="w-full py-4 px-8 text-white fond-extrabold  hover:rounded-lg text-xl hover:bg-[#517ded] hover:text-black ease-in-out duration-300">
            TodoList
          </button>
        </Link>
        <Link to="/">
          <button 
          onClick={logoutHandler}
          className="w-full py-4 px-8 text-white fond-extrabold  hover:rounded-lg text-xl hover:bg-[#517ded] hover:text-black ease-in-out duration-300">
            Logout
          </button>
        </Link>
      </div>
    </>
  );
  const guestLinks = (
    <div className="flex w-full bg-[#03203C] text-white text-[1.5rem] py-[2rem] bg justify-around">
      <Link to="/login">
        <button className="w-full py-4 px-8 text-white fond-extrabold  hover:rounded-lg text-xl hover:bg-[#517ded] hover:text-black ease-in-out duration-300">
          Login
        </button>
      </Link>
      <Link to="/register">
        <button 
        className="w-full py-4 px-8 text-white fond-extrabold  hover:rounded-lg text-xl hover:bg-[#517ded] hover:text-black ease-in-out duration-300">
          Register
        </button>
      </Link>
    </div>
  );
  return <>{localStorage.getItem("token") ? authLinks : guestLinks}</>;
};

export default NavBar;
