import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(true);

  return (
    <button
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-2"
    >
      <div className="w-[24px] h-[24px] rounded border-secondary border flex justify-center items-center">
        {checked && <FaCheck size={14} className=" text-secondary" />}
      </div>
      <h6 className="text-[15px] font-[300] text-white">{label}</h6>
    </button>
  );
};

export default Checkbox;
