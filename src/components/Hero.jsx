import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen">
      <div className="container flex mx-auto px-5 py-6">
        <div className="flex flex-col justify-center">
          <h1 className="font-extrabold text-4xl">
            Exceptional software for effortless customer service
          </h1>
          <div className="flex mt-6 text-xl font-medium mb-10 gap-3">
            <ul>
              <li className="flex gap-2 items-center mb-2">
                <CiCircleCheck />
                <p>Manage 10+ channels centrally</p>
              </li>
              <li className="flex gap-2 items-center mb-2">
                <CiCircleCheck />
                <p>Power your service with AI</p>
              </li>
              <li className="flex gap-2 items-center">
                <CiCircleCheck />
                <p>Get real-time insights</p>
              </li>
            </ul>
            <ul>
              <li className="flex gap-2 items-center mb-2">
                <CiCircleCheck />
                <p>Achieve 50% faster response time</p>
              </li>
              <li className="flex gap-2 items-center mb-2">
                <CiCircleCheck />
                <p>MAutomate support for recurring issues</p>
              </li>
              <li className="flex gap-2 items-center">
                <CiCircleCheck />
                <p>Save time with self-service</p>
              </li>
            </ul>
          </div>
          <Link to="/register">
            <button className="hover:text-orange-500 cursor-pointer w-[126px] h-[50px] rounded-[20px] bg-green-400 px-[29px] py-2.5 font-medium text-[18px] text-(--button-text)">
              Sign up
            </button>
          </Link>
        </div>
        <div>
          <img
            src="https://www.zohowebstatic.com/sites/zweb/images/desk/industrys-software.png"
            alt="image-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
