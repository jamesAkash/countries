import React from "react";

const InputField = () => {
  return (
    <input
      type="text"
      className="w-full focus:bg-cyan-100 focus:text-slate-900 pl-6 bg-transparent focus:rounded-l-full outline-none"
      placeholder="Search Country..."
    />
  );
};

export default InputField;
