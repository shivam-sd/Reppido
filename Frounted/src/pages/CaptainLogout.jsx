import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CaptainLogout = () => {

const token = localStorage.getItem("token");
const navigate = useNavigate();

axios.get(`${import.meta.env.VITE_BASE_URL}/captions/logout`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
}).then((Response) => {
    if(Response === 200){
        localStorage.removeItem("token");
        navigate("/captain-login");
    }
})

    return(<>
    <div>Captain Logout</div>
    </>);
}