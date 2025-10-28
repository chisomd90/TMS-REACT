import React from "react";
// import Logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../utils/formValidators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import useAuth from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate(); 
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data) => {
    console.log(data);
    localStorage.setItem("signUpDetails", JSON.stringify(data));
    toast.success("Sign-up successfull");
    navigate("/dashboard");
    
  };

  return (
    <main className="py-[78px] bg-green-300 h-screen px-6">
      <Link to="/">
        <h1 className="text-6xl font-extrabold text-black">TMS</h1>
      </Link>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-full max-w-[600px] rounded-[10px] md:rounded-[20px] p-6 md:p-8 mt-[58px] md:mt-[82px] mx-auto bg-green-400"
      >
        <h1 className="text-[32px] font-normal">Sign up</h1>
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
              errors.password ? "border-b-[#fc4747]" : "border-b-[#5a698f]"
            }`}
            {...register("password")}
          />
          <small className="text-[#fc4747] absolute top-3.5 right-1.5">
            {errors.password?.message}
          </small>
        </div>
        <div className="mb-6 relative">
          <input
            type="password"
            placeholder="Repeat Password"
            className={`border-b p-3 w-full focus:outline-none caret-[#fc4747] ${
              errors.repeatPassword?.message
                ? "border-b-[#fc4747]"
                : "border-b-[#5a698f]"
            }`}
            {...register("repeatPassword")}
          />
          <small className="text-[#fc4747] absolute top-3.5 right-1.5">
            {errors.repeatPassword?.message}
          </small>
        </div>
        <button
          type="submit"
          className="bg-[#fc4747] text-white w-full rounded-md text-[15px] h-12 hover:bg-white cursor-pointer hover:text-[#161d2f]"
          // disabled={authenticating}
        >
          {/* {btnText} */}
          REGISTER
        </button>
        <p className="text-center text-[15px] mt-6">
          Already have an account?{" "}
          <Link className="text-[#fc4747]" to="/login">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Register;
