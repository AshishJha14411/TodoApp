import UserContext from "./UserContext";
import axios from 'axios'
import { useState } from "react";

const UserContextProvider = (props) => {

    const [isAuth, setIsAuth] = useState()

    

return (
    <UserContext.Provider value={{isAuth,setIsAuth}}>
        {props.children}
    </UserContext.Provider>
)
}

export default UserContextProvider