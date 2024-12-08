import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  
  const handleSubmitEvent = (e) => {
    setEmail('');
    setPassword('');
    setUserData({
      email:email,
      password:password
    })
    // console.log(userData);
    e.preventDefault();
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
