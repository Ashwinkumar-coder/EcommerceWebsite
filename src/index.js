import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

//import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import Home from './pages/Home';
import Product1 from './pages/productMain';
import AboutPage from './pages/About';
import Cart from './pages/cart';
import ContactPage from './pages/contact';
import Login from './pages/Login';
import Checkout from './pages/checkout';
import Register from './pages/Register';
import PageNotFound from './pages/Pagenotfound';
//import ProductList from './pages/productlist';
import ProductDetails from './pages/productDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<Product1 />} />
         <Route path="/product/:id" element={<ProductDetails />} />
         {/* <Route path="/product" element={<ProductList />} ></Route> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />  
      </Routes>
    </Provider>
  </BrowserRouter>
 
);