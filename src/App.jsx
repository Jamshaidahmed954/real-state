import React from "react";
import LandingPage from "./pages/landingpage";
import Index from "./router";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <div>
      <SearchProvider>
        <Index />
      </SearchProvider>
    </div>
  );
};

export default App;
