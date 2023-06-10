import React from "react";
import IndexRouters from "./router/Index";
import ScrollToTop from "./components/ScrollTop";
import CardSwiper from "./components/TestCard";

const App = () => {
  return (
    <div>
      <ScrollToTop>
        <IndexRouters />
      </ScrollToTop>
    </div>
  );
};

export default App;
