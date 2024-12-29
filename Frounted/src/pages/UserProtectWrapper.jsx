// import React , {useContext, useState} from "react";
// import { UserContextData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    if(!token){
        navigate("/login");
    }

    return(<> 
    <div>{children}</div>    
    </>);
}

export default  UserProtectWrapper