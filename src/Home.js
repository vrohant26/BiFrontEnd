import React from "react";
import Slider from "./components/Slider";
import MarketApproval from "./components/MarketApproval";
import Preloader from "./components/Preloader";
// import NavBar from "./components/NavBar";
import Whyus from "./components/Whyus";
import OurPeople from "./components/OurPeople";
// import ExperiencePreview from "./components/ExperiencePreview.js";
import ContactPreview from "./components/ContactPreview.js";
// import Footer from "./components/Footer";
import PressRoomPreview from "./components/PressRoomPreview.js";
import OurServices from "./components/OurServices";
// import * as THREE from "three";

// const scene = new THREE.Scene();

export default function Home() {
  /*const AddLibrary = useCallback((urlOfTheLibrary) => {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }, []);*/

  /*useEffect(() => {
    AddLibrary('/assets/brandinstitute/js/script.js');
    return () => {
      AddLibrary('');
    };
  }, [AddLibrary]);*/
  return (
    <>
      {/*Start Loader ----------*/}
      <Preloader />
      {/* <NavBar /> */}
      <Slider />
      {/*<ExperiencePreview />*/}
      <Whyus />
      <OurServices />
      <OurPeople />
      <MarketApproval />
      <PressRoomPreview />
      <ContactPreview />
      {/* <Footer /> */}
    </>
  );
}
