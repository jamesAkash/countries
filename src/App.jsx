import React from "react";
import Cards from "./ui/Cards";
import SearchBar from "./ui/SearchBar";

const App = () => {
  return (
    <main className=" max-w-6xl mx-auto mt-28">
      <SearchBar />
      <Cards />
    </main>
  );
};

export default App;
