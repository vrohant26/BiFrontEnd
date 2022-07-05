import React, { useEffect, useCallback } from 'react';
import NavBar from './components/NavBar';
import AboutBanner from './components/About/AboutBanner.js';
import Story from './components/About/Story.js';
import Footer from './components/Footer';

export default function ourstory() {
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
      <Story />
      <Footer />
    </>
  );
}
