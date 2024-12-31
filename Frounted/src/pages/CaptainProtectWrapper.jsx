import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";


const CaptainProtectWrapper = ({children}) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [captain , setcaptain] = useContext(CaptainDataContext);
    const [isloading , setisloading] = useState(true);

   useEffect(() => {
    if(!token){
        navigate("/captain-login");
    }
   },[token])
   
   axios.get(`${import.meta.env.VITE_BASE_URL}/captains-profile` , {
    headers:{
        Authorization:`Bearer ${token}`
    }
   }).then((response) => {
    if(response.status === 200) {
        setcaptain(response.data.captain);
        setisloading(false);
    }
   }).catch(err => {
    console.log(err);
    navigate("/captain-login");
   })

   if(isloading){
       return (
        <div>Loading...</div>
       )
   }

    return(<> 
    <div>{children}</div>    
    </>);
}

export default  CaptainProtectWrapper