import React, { Fragment } from "react";
import Header from './components/Header';
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';

import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/product/new" element={<NewProduct />} />
            <Route exact path="/products/update/:id" element={<UpdateProduct />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
