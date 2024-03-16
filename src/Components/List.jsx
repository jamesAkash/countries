import React from "react";

const List = ({ label, value }) => {
  if (typeof value === "string")
    return (
      <p className="border-b text-xs md:text-sm mt-2">
        {label}: <span className="uppercase ml-2">{value}</span>
      </p>
    );
  if (Array.isArray(value)) {
    return (
      <p className="border-b text-xs md:text-sm mt-2">
        {label}:{" "}
        <span className="uppercase ml-2">
          {value.map((val) => val + " , ")}
        </span>
      </p>
    );
  }
};

export default List;
