import React, { useEffect, useCallback } from 'react';
import NavBar from './components/NavBar';
import AboutBanner from './components/About/AboutBanner.js';
import Mission from './components/About/Mission.js';
import Team from './components/About/Team.js';
import Footer from './components/Footer';

export default function ourmission() {
  /*const AddLibrary = useCallback((urlOfTheLibrary) => {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }, []);*/

  /*useEffect(() => {
    AddLibrary('/assets/creative-startup/js/script.js');
    return () => {
      AddLibrary('');
    };
  }, [AddLibrary]);*/
  return (
    <>
      {/*Start Loader ----------*/}
      {/*<Preloader />*/}
      {/*Header*/}
      <NavBar />
      <AboutBanner />
      <Mission />
      <Footer />
    </>
  );
}
