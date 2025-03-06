import React, { createContext, useState, useContext } from "react";

// Create the Search Context
const SearchContext = createContext();

// Create a Provider Component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Value object to share through context

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContext;
