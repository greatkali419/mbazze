import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import { useState } from "react";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout