import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./utils/ScrollToTop";
import Digital_Ekiti_Initiatives from "./components/Initiatives/DigitalEkitiInitiatives/Digital_Ekiti_Initiative";
import Digital_Ekiti_Initiatives_Detail from "./components/Initiatives/DigitalEkitiInitiatives/Digital_Ekiti_Initiatives_Detail";
import Foundations_Page from "./pages/Foundations_Page";
import ThoughtLeadership_Page from "./pages/ThoughtLeadership_Page";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import MarketplacePage from "./pages/MarketplacePage";
import GalleryPage from "./pages/GalleryPage";
import TeamPage from "./pages/TeamPage";
import BookCallPage from "./pages/BookCallPage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/about" element={<LandingLayout />}>
            <Route index element={<AboutPage />} />
          </Route>
          <Route
            path="/initiatives/digital_ekiti_initiative"
            element={<LandingLayout />}
          >
            <Route index element={<Digital_Ekiti_Initiatives />} />
          </Route>

          <Route
            path="/initiatives/digital_ekiti_initiative/:initiativeID"
            element={<LandingLayout />}
          >
            <Route index element={<Digital_Ekiti_Initiatives_Detail />} />
          </Route>

          <Route path="/initiatives/foundations" element={<LandingLayout />}>
            <Route index element={<Foundations_Page />} />
          </Route>

          <Route path="/thought_leadership" element={<LandingLayout />}>
            <Route index element={<ThoughtLeadership_Page />} />
          </Route>

          <Route path="/contact" element={<LandingLayout />}>
            <Route index element={<ContactPage />} />
          </Route>
          <Route path="/services" element={<LandingLayout />}>
            <Route index element={<ServicesPage />} />
          </Route>
          <Route path="/marketplace" element={<LandingLayout />}>
            <Route index element={<MarketplacePage />} />
          </Route>
          <Route path="/gallery" element={<LandingLayout />}>
            <Route index element={<GalleryPage />} />
          </Route>
          <Route path="/team" element={<LandingLayout />}>
            <Route index element={<TeamPage />} />
          </Route>
          <Route path="/book-call" element={<LandingLayout />}>
            <Route index element={<BookCallPage />} />
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>

        <Toaster position="top-right" />
      </Router>
    </>
  );
}

export default App;
