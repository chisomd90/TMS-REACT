import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./utils/ProtectedRoutes";
const Error404 = lazy(() => import("./pages/Error404"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const DashboardLayout = lazy(() => import("./layout/DashboardLayout"));
const DashboardHome = lazy(() => import("./pages/DashboardHome"));
const Tickets = lazy(() => import("./pages/Tickets"));

const App = () => {
  return (
    <Suspense fallback={<h1>Loading App...</h1>}>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="tickets" element={<Tickets />} />
            </Route>
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
