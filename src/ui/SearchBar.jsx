import React from "react";
import InputField from "../Components/InputField";
import Button from "../Components/Button";

const SearchBar = () => {
  return (
    <div className="flex  bg-stone-700 mx-auto px-2 justify-center w-96 items-center py-1 rounded-full">
      <InputField />
      <Button />
    </div>
  );
};

export default SearchBar;
