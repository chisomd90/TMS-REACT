import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginSchema } from "../utils/formValidators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data) => {
    const storedDetails = localStorage.getItem("signUpDetails");

    if (!storedDetails) {
      toast.error("No account found. Please sign up first!");
      return;
    }
    const parsedDetails = JSON.parse(storedDetails);
    if (
      data.email === parsedDetails.email &&
      data.password === parsedDetails.password
    ) {
      toast.success("Login successful!");
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <main className="py-[78px] px-6 bg-green-300 h-screen text-black">
      <Link to="/">
        <h1 className="text-6xl font-extrabold text-black">TMS</h1>
      </Link>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full max-w-[600px] rounded-[10px] md:rounded-[20px] p-6 md:p-8 mt-[58px] md:mt-[82px] mx-auto bg-green-400"
      >
        <h1 className="text-[32px] font-normal">Login</h1>
        <div className="mb-6 relative">
          <input
            type="email"
            placeholder="Email Address"
            className={`border-b p-3 w-full focus:outline-none caret-[#fc4747] ${
              errors.email ? "border-b-[#fc4747]" : "border-b-[#5a698f]"
            }`}
            {...register("email")}
          />
          <small className="text-[#fc4747] absolute top-3.5 right-1.5">
            {errors.email?.message}
          </small>
        </div>
        <div className="mb-6 relative">
          <input
            type="password"
            placeholder="Password"
            className={`border-b p-3 w-full focus:outline-none caret-[#fc4747] ${
              errors.email ? "border-b-[#fc4747]" : "border-b-[#5a698f]"
            }`}
            {...register("password")}
          />
          <small className="text-[#fc4747] absolute top-3.5 right-1.5">
            {errors.password?.message}
          </small>
        </div>

        <button
          type="submit"
          className="bg-[#fc4747] text-white w-full rounded-md text-[15px] h-12 hover:bg-white cursor-pointer hover:text-[#161d2f]"
          // disabled={authenticating}
        >
          {/* {btnText} */}
          SUBMIT
        </button>
        <p className="text-center text-[15px] mt-6">
          Already have an account?{" "}
          <Link className="text-[#fc4747]" to="/register">
            Sign Up
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
