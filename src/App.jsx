import React,{ useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./utils/ScrollToTop";
import Digital_Ekiti_Initiatives from "./components/Initiatives/DigitalEkitiInitiatives/Digital_Ekiti_Initiative";
import Digital_Ekiti_Initiatives_Detail from "./components/Initiatives/DigitalEkitiInitiatives/Digital_Ekiti_Initiatives_Detail";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<HomePage />} /> 
          </Route>
          <Route path="/about" element={<LandingLayout />} >
            <Route index element={<AboutPage />} />
          </Route>
          <Route path="/initiatives/digital_ekiti_initiative" element={<LandingLayout  />} >
            <Route index element={<Digital_Ekiti_Initiatives />} />
          </Route>

          <Route path="/initiatives/digital_ekiti_initiative/:initiativeID" element={<LandingLayout />}>
            <Route index element={<Digital_Ekiti_Initiatives_Detail />} />
          </Route>
          
          <Route path= "*" element={<h1>404 Not Found</h1>} />
        </Routes>

        <Toaster position="top-right"/>
      </Router>
    </>
  );
}

export default App;
