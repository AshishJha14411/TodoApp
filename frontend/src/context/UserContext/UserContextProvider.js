import UserContext from "./UserContext";
import axios from 'axios'
import { useState } from "react";

const UserContextProvider = (props) => {

    const [isAuth, setIsAuth] = useState()

    const logoutHandler = () => {
        setIsAuth("")
        localStorage.removeItem("token")
      }

return (
    <UserContext.Provider value={{isAuth,setIsAuth,logoutHandler}}>
        {props.children}
    </UserContext.Provider>
)
}

export default UserContextProvider