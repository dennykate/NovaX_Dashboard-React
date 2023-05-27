import React, { useState } from "react";
import Lottie from "lottie-react";

import officeAnimation from "../assets/office-animation.json";
import logo from "../assets/logo.svg";
import { Input, InputPassword } from "../components";

const Login = () => {
  const [isFocus, setIsFocus] = useState(false);

  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-screen flex" onClick={() => setIsFocus(false)}>
      <div className="w-[60%] h-full bg-white flex justify-center items-center">
        <Lottie animationData={officeAnimation} loop className="h-[95%]" />
        <div className="absolute w-[100px] h-[100px] top-5 left-7">
          <img src={logo} className="w-full h-full" alt="logo" />
        </div>
      </div>
      <div className="w-[40%] h-full bg-primary flex justify-center items-center">
        <div className="flex flex-col gap-5 w-full px-8">
          <h1 className="text-shadow text-secondary text-3xl font-bold text-center">
            Login Account!
          </h1>
          <Input
            name={"email"}
            type={"email"}
            placeholder={"Enter your email..."}
          />
          <InputPassword
            password={password}
            setPassword={setPassword}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
            name={"password"}
            placeholder={"Enter your password..."}
          />

          <div className="w-full flex justify-between items-center mt-3">
            <div className="flex items-start flex-col">
              <h6 className="text-[15px] font-[300] text-white">
                Don't have an account yet ?
              </h6>

              <h6 className="text-[15px] font-[500] text-secondary tracking-wide underline">
                Create Account
              </h6>
            </div>

            <div className="relative">
              <div className="w-[180px] h-[50px] rounded-md bg-black "></div>

              <button
                className="w-[180px] h-[50px] bg-secondary rounded-md text-black flex justify-center items-center
               absolute -top-2 -left-2 hover:top-0 hover:left-0 transition-all duration-200 ease-in-out"
              >
                <h1 className="text-[18px] font-[700] text-black">Sign In</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
