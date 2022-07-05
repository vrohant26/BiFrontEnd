import React from "react";
// import NavBar from "./components/NavBar";
import Contactcore from "./components/Contact/Contactcore";
// import Footer from "./components/Footer";

export default function contact() {
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
      {/* <NavBar /> */}
      <Contactcore />
      {/* <Footer /> */}
    </>
  );
}
