import React from "react";
import IndexRouters from "./router/Index";
import ScrollToTop from "./components/ScrollTop";

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
