import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import DogList from '../DogList/DogList';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Here will be content</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dogs" element={<DogList />} />
        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
