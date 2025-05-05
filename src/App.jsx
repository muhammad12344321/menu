import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";

import "./App.css";
import Search from "./Components/Search/Search";
import SingleProduct from "./Home/HomeCategoria/SingleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
