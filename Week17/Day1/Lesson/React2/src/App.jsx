import { useState } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { Routes, Route, Link } from 'react-router';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/product/:id' element={<Product/>} />

        <Route path='*' element={<h2>404 page not found</h2>} />
      </Routes>
    </>
  );
}

export default App
