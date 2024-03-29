import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import DogList from '../DogList/DogList';

import './App.css';
import MainPage from '../MainPage/MainPage';
import AuthRoute from '../AuthRoute/AuthRoute';

function App() {
  return (
    <div>
      <AuthRoute>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dogs" element={<DogList />} />
          <Route path="*" element={<div>404 Not found</div>} />
        </Routes>
      </AuthRoute>
    </div>
  );
}

export default App;
