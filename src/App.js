import React from 'react';
// import { Button } from 'react-bootstrap';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Header";
import Login from "./login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <h1> E com website</h1> */}
        {/* <Routes> */}
        <Routes>
          <Route path="/" element={<Protected Cmp={ProductList} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
