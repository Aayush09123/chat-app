/* eslint-disable no-unused-vars */
import React from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
