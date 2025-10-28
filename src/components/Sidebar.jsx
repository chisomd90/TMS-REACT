import React from "react";
import { NavLink } from "react-router-dom";
import { FaTicketSimple } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="p-6 w-[400px] bg-green-200 h-screen sticky top-0 left-0">
      <div className="mb-5">
        <h1 className="text-4xl font-extrabold flex items-center">
          TMS DASHBOARD
        </h1>
      </div>
      <div className="px-5 flex flex-col gap-5">
        <div>
          <NavLink
            to="/dashboard"
            className="flex justify-center items-center gap-3"
          >
            <MdDashboard />
            <h1>Home</h1>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dashboard/tickets"
            className="flex justify-center items-center gap-3"
          >
            <FaTicketSimple />
            <h1>Tickets</h1>
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="flex justify-center items-center gap-3">
            <CiLogout size={30} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
