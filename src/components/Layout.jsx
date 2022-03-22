import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Routess from '../config/Routess'
const Layout = () => {
  return (
    <BrowserRouter>
    <div className='container'>
    <Header/> 
    <Routess/>
    </div> 
    <Footer/>
    </BrowserRouter>
    
  )
}

export default Layout