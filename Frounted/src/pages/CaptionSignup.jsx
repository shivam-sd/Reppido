import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptionSignup = () => {
  
  const [firstname , setFirstname] = useState('');
  const [lastname , setLasttname] = useState('');
  const [email , setemail] = useState('');
  const [password , setPassword] = useState('');
  const [UserData , setUserData] = useState({});

  const handleFirstName = (e) => {
    setFirstname(e.target.value);
  }

  const handleLastName = (e) => {
    setLasttname(e.target.value);
  }

  const handleEmail = (e) => {
    setemail(e.target.value);
  }

  const handlepassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmitEvent = (e) => {
      e.preventDefault();
      setUserData({
        fullname:{
          firstname:firstname,
          lastname:lastname
        },
        email:email,
        password:password
      })

      setFirstname('');
      setLasttname('');
      setPassword('');
      setemail('');

      console.log(UserData);
  }


  return (
    <div className="flex flex-col justify-between h-screen">

      <div className="p-7">
        <img
          className="w-24 mb-7 ml-5"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt=""
        />
        <form onSubmit={handleSubmitEvent}>
          <h2 className="text-black font-bold text-base mb-2">
            What's Your Captain Name
          </h2>
          <div className=" flex gap-4">
          <input
            className="text-black bg-gray-200 p-3 w-full mb-9"
            type="text"
            required
            placeholder="First Name"
            value={firstname}
            onChange={handleFirstName}
          />

           <input
            className="text-black bg-gray-200 p-3 w-full mb-9"
            type="text"
            required
            placeholder="Last Name"
            value={lastname}
            onChange={handleLastName}
          />
          </div>

          <h2 className="text-black font-bold text-base mb-2">Enter Captain Email</h2>
          <input
            className="text-black bg-gray-200 p-3 w-full mb-7"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={handleEmail}
          />
         
          <h2 className="text-black font-bold text-base mb-2">Enter Captain Password</h2>
          <input
            className="text-black bg-gray-200 p-3 w-full mb-7"
            type="text"
            placeholder="password@123"
            value={password}
            onChange={handlepassword}
          />

          <button className="text-center bg-black text-white w-full p-3 text-xl rounded font-bold mb-2">
            Login
          </button>
        </form>
        <Link className="flex  items-center justify-center gap-2 text-blue-600 font-bold text-md" to="/login">
          <h3 className="text-black text-center">Allready have an acoount? </h3>Login here
        </Link>
      </div>


      <div className="p-6">
        <p className='text-[12px] font-bold'>This site is protected by reCAPTCHA and the <span className='underline'> Google Privicy Policy </span> and <span className='underline'> Terms of Service apply</span>.</p>
      </div>

    </div>
  )

}

export default CaptionSignup
