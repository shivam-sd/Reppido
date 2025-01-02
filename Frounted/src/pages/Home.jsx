import React, { useEffect, useState } from "react";
import LocationPannel from "./LocationPannel";
import { MdArrowDropDown } from "react-icons/md";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  // const [vehiclepannel , setvehiclepannle] = useState(false);

  const handlepickup = (e) => {
    setpickup(e.target.value);
  };

  const handledestination = (e) => {
    setdestination(e.target.value);
  };


  const handlemovetop = () => {
    const searchtrip = document.querySelector(".searchtrip");
    searchtrip.style.top = 0;
    searchtrip.style.height = "30%";
    const cityname = document.querySelector(".cityname");
    cityname.style.display = "inline-block";
    cityname.style.borderTop = "1px solid red";
    cityname.style.height = "70%";
    const closepannel = document.querySelector(".closepannel");
    closepannel.style.display = "inline-block";
  };

  const handleClosepannel = () => {
    const searchtrip = document.querySelector(".searchtrip");
    searchtrip.style.top = "430px";
    const cityname = document.querySelector(".cityname");
    cityname.style.display = "none";
    const closepannel = document.querySelector(".closepannel");
    closepannel.style.display = "none";
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    const trip = {
      pickup: pickup,
      destination: destination,
    };
    console.log(trip);
  };

  return (
    <div className="relative overflow-y-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        className="w-20 absolute z-10 mt-4 ml-7"
        alt=""
      />

      <div className="map w-full h-full relative">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5a05f520f6576e6135323430/1570233092180-KY4SR5HLAZ42H8UF73IF/v3.png"
          className="z-0"
          alt=""
        />
      </div>

      <div className="searchtrip absolute rounded z-10 w-full p-4 pb-10 bg-white bottom-0">
        <div
          className="closepannel hidden absolute right-7 flex items-center justify-center"
          onClick={handleClosepannel}
        >
          <MdArrowDropDown className="font-bold text-4xl" />
        </div>
        <div className="w-16 h-1 bg-gray-500 absolute rotate-90 left-4 top-[115px]"></div>
        <h1 className="font-bold text-3xl ml-5">Find A Trip</h1>

        <form
          onSubmit={handleSubmitEvent}
          className="flex flex-col p-4 items-center gap-4"
        >
          <input
            type="text"
            placeholder="Add a pick-up location"
            className="w-full h-11 bg-gray-300 pl-8 text-black text-base rounded"
            value={pickup}
            onChange={handlepickup}
            onClick={handlemovetop}
          />
          <input
            type="text"
            placeholder="Enter Your destination"
            className="w-full h-11 bg-gray-300 pl-8 text-black text-base rounded"
            value={destination}
            onChange={handledestination}
            onClick={handlemovetop}
          />
        </form>
      </div>

      <div className="cityname h-[70%] bg-white border-red-700 border-t absolute z-10 w-full top-48 hidden transition-all">
        <LocationPannel />
      </div>
      
    </div>
  );
};

export default Home;
