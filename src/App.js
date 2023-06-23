import React from "react";
import IndexRouters from "./router/Index";
import ScrollToTop from "./components/ScrollTop";
import CardSwiper from "./components/TestCard";
import "./App.css";

const App = () => {
  return (
    <>
      <ScrollToTop>
        <IndexRouters />
      </ScrollToTop>
    </>
  );
};

export default App;
