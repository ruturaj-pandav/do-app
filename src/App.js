import "./App.css";
import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";


import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App bg-grey">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
