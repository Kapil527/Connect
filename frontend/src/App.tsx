import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Login from "./auth/login/Login";
import SignUP from "./auth/signup/Signup";

import Home from "./pages/Home";
import AppointmentCard from "./Appointment/AppointmentCard";
import ShowBlogs from "./blog";
import Setting from "./Settings";
import ProfileDetails from "./Profile";
import Billing from "./Billing";
import Messages from "./Messages";

import Navbar from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Footer from "./components/Footer";
import useWindowDimensions from "./components/useWindowDimensions";
import { PageNotFound } from "./components/PageNotFound";

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
        <Route path="/settings/:slug" element={<Setting />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/billings" element={<Billing />} />
        <Route path="/blogs" element={<ShowBlogs />} />
        <Route path="*" element={<PageNotFound />} />
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
