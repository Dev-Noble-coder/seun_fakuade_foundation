import React,{ useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout"
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          
          <Route path= "*" element={<h1>404 Not Found</h1>} />
        </Routes>

        <Toaster position="top-right"/>
      </Router>
    </>
  );
}

export default App;
