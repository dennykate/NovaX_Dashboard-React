import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Checkbox from "./Checkbox";

const InputPassword = ({
  name,
  placeholder,
  setIsFocus,
  isFocus,
  password,
  setPassword,
}) => {
  const inputRef = useRef();
  const [hidden, setHidden] = useState(true);

  const generateStarPassword = (text) => {
    let star = "";

    for (let i = 0; i < text.length; i++) {
      star += "•";
    }

    return star;
  };

  const inputHandler = (e) => {
    let lastChar = e.target.value.slice(
      e.target.value.length - 1,
      e.target.value.length
    );

    setPassword(password + lastChar);
  };

  return (
    <div
      className="flex flex-col gap-2"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <label
        htmlFor={name}
        className="text-xl text-secondary text-shadow1 font-medium capitalize "
      >
        {name}
      </label>

      <div className="relative w-full">
        <div className="w-full h-[50px] rounded-md border border-secondary"></div>

        <div
          className={`w-full h-[50px] absolute ${
            isFocus ? "-top-2 -left-2" : "top-0 left-0"
          } flex items-center transition-all duration-200 ease-in-out border border-secondary bg-primary rounded-md`}
        >
          <input
            id={name}
            value={hidden ? generateStarPassword(password) : password}
            onChange={inputHandler}
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            className="w-full h-full bg-primary outline-none rounded-md px-3 text-white"
            onFocus={() => setIsFocus(true)}
          />

          <button
            onClick={(e) => {
              inputRef.current.focus();
              setHidden(!hidden);
            }}
            className="min-w-[50px] h-[50px] border-t border-b rounded-tr-md rounded-br-md border-secondary  
            flex justify-center items-center"
          >
            {hidden ? (
              <AiOutlineEye size={24} color="#FBC108" />
            ) : (
              <AiOutlineEyeInvisible size={24} color="#FBC108" />
            )}
          </button>
        </div>

        <div className="w-full mt-3 flex justify-between items-center">
          <Checkbox label="Remember me" />

          <h6 className="text-[15px] font-[300] text-white">
            Forget password?
          </h6>
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
