import React from "react";

const AddTodo = () => {

  




  return (
    <div>
      <input
        className="w-full mx-auto my-4 p-3"
        placeholder="Please Enter the Title"
      />
      <textarea className="w-full mx-auto my-4 p-3" />
      <button className="ml-[45%] p-5 w-[10rem] text-white fond-extrabold bg-[#207398] rounded-full text-xl hover:bg-[#51E1ED] hover:text-black ease-in duration-200">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
