import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.scss'
import App from './App.jsx'



import 'bootstrap'
import { PolylineOutlined, Routes, Router } from '@ricons/material' // De icons die je wilt gebruiken.
import { Icon } from '@ricons/utils' // De helper component om Icons in te laden, zo kun je met de properties zoals size="" de grootte aanpassen.
import Card from './components/Card'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route element=(<Layout></Layout>)
    <Route path="/" element={<App />} />
    <Route path="/contact" element=(<Contact />
    </Routes>
    </BrowserRouter>


  </Routes>
  </BrowserRouter>
)
