import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//import Login section 
import Login from "./Login";

//importing Layout
import Layout from "./Layout";
import AddToCart from "./Layout/AddToCart";
import ProductList from "./Layout/ProductList";
import ProductDetails from "./Layout/ProductDetails";
import MainComponent from "./Layout/MainComponent";

//importing not found page 
import NotFoundPage from "./Notfound";

function MakeupAPP() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="dashboard" element={<Layout />}>
            <Route path="" element={<MainComponent />} />
            <Route path="add" element={<ProductList />} />
            <Route path="view/:id" element={<ProductDetails />} />
            <Route path="cart" element={<AddToCart />} />
          </Route>
         
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default MakeupAPP;

