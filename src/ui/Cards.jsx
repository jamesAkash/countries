import React from "react";
import Card from "../Components/Card";
const arr = [1, 2, 3];
const Cards = () => {
  return (
    <section className="flex justify-center gap-6  py-14 flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Cards;
