import React, { useState } from "react";

const Input = ({ name, type, placeholder }) => {
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

        <input
          id={name}
          type={type}
          className="w-full h-[50px] bg-primary border-secondary border outline-none rounded-md absolute
          focus:-top-2 focus:-left-2 top-0 left-0 transition-all duration-200 ease-in-out px-3 text-white"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
