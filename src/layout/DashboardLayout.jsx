import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const DashboardLayout = () => {
  return (
    <div className=" flex justify-center items-center  ">
      <div className="flex flex-col lg:flex-row w-full  ">
        <Sidebar />
        <div className="container p-6 lg:p-4">
          <Topbar/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
