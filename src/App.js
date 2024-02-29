import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as rwt, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <rwt>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </rwt>
      </div>
    </>
  );
}

export default App;
