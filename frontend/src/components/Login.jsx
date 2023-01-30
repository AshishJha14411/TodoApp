import React from "react";

const Login = () => {
  return (
    <div className="bg-[#03203C] mt-[5rem] w-2/5 flex flex-col rounded-[4%] justify-center">
      <h1 className="text-[3rem] text-center font-bold text-white my-5">
        Login
      </h1>
      <input className="w-3/5 mx-auto my-4 p-3" placeholder="Email Address" />
      <input className="w-3/5 mx-auto my-4 p-3" placeholder="Password" />
      <button className="w-2/5 mx-auto my-6 p-4 text-white fond-extrabold bg-[#207398] rounded-full text-xl hover:bg-[#51E1ED] hover:text-black ease-in duration-200">
        Login
      </button>
      <button className="w-2/5 mx-auto mb-6 p-4 text-white fond-extrabold bg-[#205e98] rounded-full text-xl hover:bg-[#517ded] hover:text-black ease-in duration-200">
        Register
      </button>
    </div>
  );
};

export default Login;
