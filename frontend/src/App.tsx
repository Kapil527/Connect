import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./auth/login/Login";
import SignUP from "./auth/signup/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppointmentCard from "./Appointment/AppointmentCard";

function App() {
  const currentPath = useLocation();
  return (
    <>
      {currentPath.pathname === "/login" ? (
        ""
      ) : currentPath.pathname === "/signup" ? (
        ""
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<AppointmentCard />} />
      </Routes>
      {currentPath.pathname == "/login" ? (
        ""
      ) : currentPath.pathname === "/signup" ? (
        ""
      ) : (
        <Footer />
      )}
    </>
  );
}

export default App;
