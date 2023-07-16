import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data analytics dashboard
          </p>
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem
            architecto libero iste consequatur, nihil eum in impedit! Vitae
            ratione fugiat hic provident accusamus esse sint adipisci neque,
            minima consequatur!
          </p>
          <button className="w-[200px] mx-auto text-[#00df9a] bg-black rounded-md py-3 my-6 md:mx-0 font-medium ">
            Get Started
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
