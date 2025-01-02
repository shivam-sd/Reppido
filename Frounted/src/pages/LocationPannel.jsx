import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const LocationPannel = () => {

  const handleVehiclerises = () => {
    const drivepannel = document.querySelector(".drivepannel");
    drivepannel.style.display = "inline-block"
    console.log("asfsa")

  };


  const location = [
    "Invertis University Bareilly NH-24 Uttar Pradesh",
    "Veer Bahadur Sign Purvanchal University Jaunpur Uttar Pradesh",
    "Gujrat , Surat Pandesra Riddhi Siddhi Nagar Plot No 2 Near TulsiDham Nagar",
    "Noida Sector 62 Shivam's Company Shivam Software's pvt ltd..",
    "Banaras Hindu University Varanasi Near Jaunpur Uttar Pradesh",
  ];

  return (
    <div>
      {location.map((elm, index) => {
        return (
          <>
            <div
              onClick={handleVehiclerises}
              keys={index}
              className="p-4 flex items-center justify-center gap-4 border-2 border-gray-300 rounded active:border-black mt-1"
            >
              <HiLocationMarker className="text-4xl flex items-center justify-center" />
              <h1 className="text-base font-bold items-center justify-center">
                {elm}
              </h1>
            </div>
          </>
        );
      })}

      <div className=" drivepannel p-2 rounded w-full z-10 absolute bottom-0 bg-white pb-20 hidden">
        <h1 className="p-2 font-bold text-2xl ml-5">Choose Your Vehicle</h1>
        <div className="flex justify-center gap-2 active:border-black bg-white border border-gray-300 rounded p-1 mb-7">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
            alt="car"
            className="w-28"
          />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold text-xl">UberGo</h1>
            <p className="font-bold text-gray-800 text-base mb-0">
              2 mins away <span>.</span>15:24
            </p>
            <span className="font-bold text-gray-800 text-[11px] mb-0">
              Affordable, compact rides
            </span>
          </div>
          <p className="font-bold text-base ml-4">$193.20</p>
        </div>

        <div className="flex justify-center gap-3 active:border-black bg-white border border-gray-300 rounded p-1 mb-4 ">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="moto"
            className="w-24"
          />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold text-xl">Moto</h1>
            <p className="font-bold text-gray-800 text-base mb-0">
              3 mins away <span>.</span>15:24
            </p>
            <span className="font-bold text-gray-800 text-[11px] mb-0">
              Affordable, motocycle rides
            </span>
          </div>
          <p className="font-bold text-base ml-4">$65.17</p>
        </div>

        <div className="flex justify-center active:border-black bg-white border border-gray-300 rounded p-1 mb-4 gap-2">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="auto"
            className="w-28"
          />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold text-xl">UberAuto</h1>
            <p className="font-bold text-gray-800 text-base mb-0">
              2 mins away <span>.</span>15:24
            </p>
          </div>
          <p className="font-bold text-base ml-4">$118.21</p>
        </div>
      </div>
    </div>
  );
};

export default LocationPannel;
