import React from "react";
import List from "./List";

const Card = () => {
  return (
    <article className="bg-stone-900 border leading-10 px-12 py-8 rounded-3xl">
      <div className="relative">
        <h1 className="absolute text-md bg-slate-600 leading-none px-6 py-2 ">
          India
        </h1>
        <img className="w-60" src="https://flagcdn.com/in.svg" alt="india" />
      </div>
      <List label="Country Name" value="india" />
      <List label="Capital" value="delhi" />
      <List label="UN member" value={true ? "Yes" : "No"} />
      <List label="borders" value={["Bhutan", "Pakistan", "Nepal"]} />
    </article>
  );
};

export default Card;
