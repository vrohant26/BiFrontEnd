import React from "react";
// import NavBar from "./components/NavBar";
import Experiencecore from "./components/Experience/Experiencecore";
// import Footer from "./components/Footer";

export default function pressroom() {
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
      {/* <NavBar /> */}
      <Experiencecore />
      {/* <Footer /> */}
    </>
  );
}
