import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css"
import Login from "./auth/login/Login";
import SignUP from "./auth/signup/Signup";

import Home from "./pages/Home";
import AppointmentCard from "./Appointment/AppointmentCard";
import Setting from "./Settings/Setting";
import Messages from "./Messages/Messages";

import Navbar from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Footer from "./components/Footer";
import useWindowDimensions from "./components/useWindowDimensions";
import Billing from "./Billing";

function App() {
  const currentPath = useLocation();
  const { width } = useWindowDimensions();
  return (
    <>
      {currentPath.pathname === "/login" ? (
        ""
      ) : currentPath.pathname === "/signup" ? (
        ""
      ) : (
        <>{width > 769 ? <Navbar /> : <Sidebar />}</>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<AppointmentCard />} />
        <Route path="/profile" element={<Setting />} />
        <Route path="/messages" element={<Messages />}/>
        <Route path="/billings" element={<Billing />}/>
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
