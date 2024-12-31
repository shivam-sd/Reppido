import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptionSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLasttname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [color , setvehicleColor] = useState("");
  const [plate , setvehiclePlate] = useState("");
  const [capacity , setvehicleCapacity] = useState("");
  const [vehicalType , setvehicleType] = useState("");
  const [UserData, setUserData] = useState({});

  const { captain, setcaptain } = React.useContext(CaptainDataContext);

  const handleFirstName = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastName = (e) => {
    setLasttname(e.target.value);
  };

  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handlepassword = (e) => {
    setPassword(e.target.value);
  };

  const handleVehicleColor = (e) => {
    setvehicleColor(e.target.value);
  }

  const handleVehiclePlate = (e) => {
    setvehiclePlate(e.target.value)
  }

  const handleVehicleCapacity = (e) => {
    setvehicleCapacity(e.target.value);
  }

  const handleVehicleType = (e) => {
    setvehicleType(e.target.value);
  }

  const handleSubmitEvent = async (e) => {

    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle:{
        color:color,
        plate:plate,
        capacity:parseInt(capacity, 10),
        vehicalType:vehicalType
      }
    };

    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || vehicalType === "Select vehicle") {
      alert("Please fill out all fields correctly.");
      return;
    }

console.log(captainData)

    try{
      const response = await axios.post(`http://localhost:4000/captions/register` ,
        captainData);

      if(response.status === 201){
        // const data = response.data;
        console.log(response);
      }
    }catch(err){
      console.log(err);
    }


    // setFirstname("");
    // setLasttname("");
    // setPassword("");
    // setemail("");

    // console.log(UserData);
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="p-5">
        <img
          className="w-24 mb-3 ml-5"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt=""
        />
        <form onSubmit={handleSubmitEvent}>
          <h2 className="text-black font-bold text-base mb-1">
            What's Your Captain Name
          </h2>
          <div className=" flex gap-4">
            <input
              className="text-black bg-gray-200 p-3 w-full mb-4"
              type="text"
              required
              placeholder="First Name"
              value={firstname}
              onChange={handleFirstName}
            />

            <input
              className="text-black bg-gray-200 p-3 w-full mb-4"
              type="text"
              required
              placeholder="Last Name"
              value={lastname}
              onChange={handleLastName}
            />
          </div>

          <h2 className="text-black font-bold text-base mb-2">
            Enter Captain Email
          </h2>
          <input
            className="text-black bg-gray-200 p-3 w-full mb-4"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={handleEmail}
          />

          <h2 className="text-black font-bold text-base mb-2">
            Enter Captain Password
          </h2>
          <input
            className="text-black bg-gray-200 p-3 w-full mb-4"
            type="text"
            placeholder="password@123"
            value={password}
            onChange={handlepassword}
          />

          <h2 className="text-black font-bold text-base mb-2">
            Vehicle Information
          </h2>
          <div className=" flex gap-4">
            <input
              className="text-black bg-gray-200 p-3 w-full mb-4"
              type="text"
              required
              placeholder="Vehicle Color"
              value={color}
              onChange={handleVehicleColor}
            />

            <input
              className="text-black bg-gray-200 p-3 w-full mb-4"
              type="text"
              required
              placeholder="Vehicle Plate"
              value={plate}
              onChange={handleVehiclePlate}
            />
          </div>
          <div className=" flex gap-4">
            <input
              className="text-black bg-gray-200 p-3 w-full mb-4"
              type="text"
              required
              placeholder="Vehicle Capacity"
              value={capacity}
              onChange={handleVehicleCapacity}
            />

            <select name="vehicle type" id="" value={vehicalType} onChange={handleVehicleType} className="text-black bg-gray-200 p-3 w-full mb-4 text-[16px] font-bold">
              <option disabled>Select vehicle</option>
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="moto">motorcycal</option>
            </select>
          </div>

          <button className="text-center bg-black text-white w-full p-3 text-xl rounded font-bold mb-2">
            Signup
          </button>
        </form>
        <Link
          className="flex  items-center justify-center gap-2 text-blue-600 font-bold text-md"
          to="/login"
        >
          <h3 className="text-black text-center">Allready have an acoount? </h3>
          Login here
        </Link>
      </div>

      <div className="p-6">
        <p className="text-[12px] font-bold">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline"> Google Privicy Policy </span> and{" "}
          <span className="underline"> Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptionSignup;
