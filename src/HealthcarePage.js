import React from 'react';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ScrollTop from './components/ScrollTop';

export default function HealthcarePage({ setMove, Switch }) {
  return (
    <>
      <NavBar setMove={setMove} Switch={Switch} />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
}
