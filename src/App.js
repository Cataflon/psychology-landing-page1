import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AboutMe from "./pages/AboutMe/AboutMe";
import Services from "./pages/Services/Services";
import Consiliere from "./pages/Services/Consiliere/Consiliere";
import  HomePage  from "./pages/HomePage/HomePage";
const App = () => {
  // home page
  // about me
  // services
  //contact
  // reservation
  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/consiliere" element={<Consiliere/>} />
         <Route path="/consiliere/services" element={<Services />} />
      </Routes>
    // <div className="content">
    //   <AboutMe/>
    // </div>
  );
}

export default App;
