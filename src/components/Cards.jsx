import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 bg-white mt-[-3rem] mx-auto"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="text-center font-medium">
            <p className="pt-4 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="pt-4 border-b mx-8">1 Granted User</p>
            <p className="pt-4 border-b mx-8">Send upto 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-300 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 bg-transparent mt-[-3rem] mx-auto"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 ">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="text-center font-medium">
            <p className="pt-4 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="pt-4 border-b mx-8">1 Granted User</p>
            <p className="pt-4 border-b mx-8">Send upto 2 GB</p>
          </div>
          <button className="text-[#00df9a] bg-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 bg-white mt-[-3rem] mx-auto"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="text-center font-medium">
            <p className="pt-4 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="pt-4 border-b mx-8">1 Granted User</p>
            <p className="pt-4 border-b mx-8">Send upto 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
