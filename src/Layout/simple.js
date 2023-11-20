import React, { memo, Fragment } from "react";
import { Outlet } from "react-router-dom";

const Simple = memo((props) => {
  return (
    <Fragment>
      <main>
        <div>
          <Outlet/>
        </div>
      </main>
    </Fragment>
  );
});

Simple.displayName = "Simple";
export default Simple;
