import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptionLogin = () => {
  const [email, setEmail] = useState("");
  const handleEmailData = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordData = (e) => {
    setPassword(e.target.value);
  };

  const [captainData, setCaptainData] = useState({});

  const handleSubmitEvent = (e) => {
    setEmail("");
    setPassword("");
    setCaptainData({
      email: email,
      password: password,
    });
    console.log(captainData);
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="p-7">
        <img
          className="w-28 mb-7 ml-3 mt-4"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt=""
        />
        <form onSubmit={handleSubmitEvent}>
          <h2 className="text-black font-bold text-xl mb-2">
            What's Your Captain Email
          </h2>
          <input
            className="text-black bg-gray-200 p-3 w-full mb-9"
            type="email"
            required
            value={email}
            onChange={handleEmailData}
            placeholder="example@gmail.com"
          />
          <h2 className="text-black font-bold text-xl mb-2">Enter Captain Password</h2>
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
        <Link
          className="flex  items-center justify-center gap-2 text-blue-600 font-bold text-md"
          to="/captain-signup"
        >
          <h3 className="text-black text-center">Join a fleet? </h3>Register as
          a Captain
        </Link>
      </div>

      <div className="p-7">
        <Link
          to="/login"
          className=" mb-3 text-center flex items-center justify-center bg-orange-500 text-white w-full p-3 text-xl rounded font-bold"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptionLogin;