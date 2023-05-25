import React, { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputPassword = ({ name, placeholder }) => {
  const inputRef = useRef();
  const [isFocus, setIsFocus] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isEyeClick, setIsEyeClick] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xl text-secondary text-shadow1 font-medium capitalize "
      >
        {name}
      </label>

      <div className="relative w-full">
        <div className="w-full h-[50px] rounded-md border border-secondary"></div>

        <div
          className={`w-full h-[50px] absolute flex items-center ${
            isFocus ? "-top-2 -left-2" : "top-0 left-0"
          } transition-all duration-200 ease-in-out`}
        >
          <input
            ref={inputRef}
            type="password"
            className="w-full h-[50px] border border-secondary rounded-md outline-none px-3 bg-primary text-white"
            onFocus={() => setIsFocus(true)}
            onBlur={() => {
              setTimeout(() => {
                if (!isEyeClick) {
                  alert("leeeee");
                  setIsFocus(false);
                  setIsEyeClick(false);
                }
              }, 1000);
            }}
          />
          <button
            onClick={() => {
              alert("click");
              //   e.stopPropagation();
              setIsEyeClick(true);
            }}
            className="min-w-[50px] h-[50px] flex justify-center items-center absolute top-0 right-0 bg-red-300"
          >
            <AiOutlineEye color="white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
