import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Loading from "../components/custom/Loading/Loading";
import Default from "../Layout/default";
import Simple from "../Layout/simple";
import Login from "../view/auth/login/Login";
import Registration from "../view/auth/registration/Registration";

import Cart from "../view/Cart/Cart";
import Home from "../view/Home/Home";
import Products from "../view/Products/Products";
import Settings from "../view/Settings/Settings";
import Wishlist from "../view/Wishlist/Wishlist";

const IndexRouters = () => {
  return (
    <div>
      <CSSTransition classNames="fadein" timeout={200}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Default />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<h1> 404 Not Found</h1>} />
          </Routes>
        </Suspense>
      </CSSTransition>
    </div>
  );
};

export default IndexRouters;
