import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://scwcontent.affino.com/AcuCustom/Sitename/DAM/019/Parsons_PR.jpg)] h-screen pt-10 w-full bg-red-400 flex justify-between flex-col">
            {/* <img className="w-16 ml-8" src="https://www.pngpacks.com/uploads/data/302/IMG_F47ugwzMujO4.png" alt="" /> */}
            <h1 className="font-bold text-white text-3xl ml-8">Uber</h1>
        <div className="bg-white py-4 px-5 pb-7">
          <h2 className="text-2xl font-bold text-center">Get Started with Reppido</h2>
          <Link to='/login' className=" flex items-center justify-center w-full bg-black text-white py-3 mt-4 rounded">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
