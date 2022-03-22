import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';

import Home from '../pages/Home';
const Routess = () => {
  return (
  <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
    
      
    
  )
}

export default Routess