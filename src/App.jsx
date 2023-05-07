import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Modal from 'react-modal';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// require('dotenv').config()

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    Modal.setAppElement('#root')
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation data={landingPageData.navigation} />
      <Header data={landingPageData.header} />
      <Features data={landingPageData.features} />
      <About data={landingPageData.about} />
      <Services data={landingPageData.services} />
      <Gallery data={landingPageData.gallery} />
      <Contact data={landingPageData.contact} />
    </div>
  );
};

export default App;
