import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import react from "../assets/react.svg"

const Topbar = () => {
  return (
    <div>
      <div className="flex justify-between p-4">
        <div>
          <h2 className="text-2xl font-bold">
            WELCOME, <span className="text-green-300">DANIEL</span>
          </h2>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <div>
            <button>
              <IoIosNotificationsOutline size={32} />
            </button>
          </div>
          <div className="flex gap-3">
            <img src={react} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Topbar;
