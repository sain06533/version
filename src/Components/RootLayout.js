import React from 'react'
import Header from './Header'
import {Outlet} from "react-router-dom"
import Footer2 from "./Footer2"
function RootLayout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer2/>
        
    </div>
  )
}

export default RootLayout