import React, { createContext } from "react";

const InitialValue = {
  data: [],
  mode: "dark",
};

export const SearchContext = createContext(InitialValue);

const SearchWrapper = ({ children }) => {
  return (
    <SearchContext.Provider value={InitialValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchWrapper;
