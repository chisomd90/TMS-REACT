import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="w-full py-4 bg- border-b border-(--visionborder) text-black sticky top-0">
      <nav className="container mx-auto px-6 h-[65px]">
        <div className="flex justify-between">
          <div>
            <Link to="/">
              <h1 className="text-[48px] font-extrabold cursor-pointer ">
                TMS
              </h1>
            </Link>
          </div>
          <div className="flex gap-4">
            <Link to="/register">
              <button className="hover:text-orange-500 cursor-pointer w-[126px] h-[50px] rounded-[20px] bg-green-400 px-[29px] py-2.5 font-medium text-[18px] text-(--button-text)">
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="hover:text-orange-500 cursor-pointer w-[126px] h-[50px] rounded-[20px] bg-green-400 px-[29px] py-2.5 font-medium text-[18px] text-(--button-text)">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar