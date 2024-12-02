import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.scss'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";
import 'bootstrap'
import { PolylineOutlined, Routes, Router } from '@ricons/material' // De icons die je wilt gebruiken.
import { Icon } from '@ricons/utils' // De helper component om Icons in te laden, zo kun je met de properties zoals size="" de grootte aanpassen.
import Card from './components/Card'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
          
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

