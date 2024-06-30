import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import './Layout.scss';

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Spinner loading={loading} />
      <div className={`contentt ${loading ? 'hiden' : 'visiblle'}`}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;