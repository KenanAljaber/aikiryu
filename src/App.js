import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import AboutUs from "./pages/about-us/about-us";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
