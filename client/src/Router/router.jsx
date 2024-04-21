import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProductListBlock from "../productListBlock/productListBlock";

const RouterCmp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={ProductListBlock} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouterCmp;
