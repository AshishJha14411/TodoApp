import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Register from "./components/Register";
import UserContextProvider from "./context/UserContext/UserContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <div className="flex-col mx-auto">
      <UserContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addtodo" element={<AddTodo />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
