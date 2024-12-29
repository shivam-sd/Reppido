import axios from "axios";
import React, { useState , useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import { UserContextData } from "../context/UserContext";

const UserLogin = () => {

  const [email , setEmail] = useState('');
  const handleEmailData = (e) => {
    setEmail(e.target.value)
  }

  const [password , setPassword] = useState('');
  const handlePasswordData = (e) => {
    setPassword(e.target.value)
  }

  const [userData , setUserData] = useState({});
  
  const navigate = useNavigate();

  const {user , setUser} = useContext(UserContextData)

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    const loginUserData = {
      email:email,
      password:password
    }
    // console.log(userData);

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login` , loginUserData);

    if(response.status === 200){
      const data = response.data;
      // console.log(response);
      setUser(data.user);
      // console.log(data.user);
      localStorage.setItem("token",data.token);

      navigate("/home")
      setEmail('');
      setPassword('');
    }
  }
  return (
    <div className="flex flex-col justify-between h-screen">

      <div className="p-7">
        <img
          className="w-24 mb-7 ml-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={handleSubmitEvent}>
          <h2 className="text-black font-bold text-xl mb-2">
            What's Your User Email
          </h2>
          <input
            className="text-black bg-gray-200 p-3 w-full mb-9"
            type="email"
            required
            value={email}
            onChange={handleEmailData}
            placeholder="example@gmail.com"
          />
          <h2 className="text-black font-bold text-xl mb-2">Enter User Password</h2>
          <input
            className="text-black bg-gray-200 p-3 w-full mb-7"
            type="text"
            placeholder="password@123"
            value={password}
            onChange={handlePasswordData}
          />

          <button className="text-center bg-black text-white w-full p-3 text-xl rounded font-bold mb-2">
            Login
          </button>
        </form>
        <Link className="flex  items-center justify-center gap-2 text-blue-600 font-bold text-md" to="/signup">
          <h3 className="text-black text-center">New User? </h3>Create New Account
        </Link>
      </div>


      <div className="p-7">
        <Link to='/captain-login' className=" mb-3 text-center flex items-center justify-center bg-green-700 text-white w-full p-3 text-xl rounded font-bold">Sign in as Captain</Link>
      </div>

    </div>
  );
};

export default UserLogin;
