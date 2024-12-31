// import React , {useContext, useState} from "react";
// import { UserContextData } from "../context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

   useEffect(() => {
    if(!token){
        navigate("/login");
    }
   },[token])

    return(<> 
    <div>{children}</div>    
    </>);
}

export default  UserProtectWrapper