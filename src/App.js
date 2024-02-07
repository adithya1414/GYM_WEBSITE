import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExcerciseDetail from './pages/ExcerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Star from './components/Star';
import Footer from "./components/Footer";
const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExcerciseDetail/>} />
      <Route path="/star" element={<Star />} />
      <Route path="/star#exercises" element={<Home/> } />
    </Routes>
    <Footer/>
  </Box>
);

export default App;
