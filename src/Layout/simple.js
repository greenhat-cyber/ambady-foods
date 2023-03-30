import React, { memo, Fragment } from "react";
import SimpleRouter from "../router/simple-router";

const Simple = memo((props) => {
  return (
    <Fragment>
      <main>
        <div>
          <SimpleRouter />
        </div>
      </main>
    </Fragment>
  );
});

Simple.displayName = "Simple";
export default Simple;
