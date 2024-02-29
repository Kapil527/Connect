import { Link } from "react-router-dom";

import Logo from "/logo1.webp";
import InstaIcon from "/instagram-white-icon.svg"
import FacebookIcon from "/facebook-icon.svg"
import XIcon from "/x-icon.svg"
import LinkedInIcon from "/linkedin-icon.svg"

const Footer = () => {
  return (
    <>
      <footer className=" h-fit w-full flex items-center bg-gray-900 text-white p-6 md:p-12">
        <div className="container">
          <div className="uppperSection md:grid md:grid-cols-3 lg:grid-cols-4 mb-4 place-content-between">
            <div className="aboutText lg:col-span-2">
              <div className="logo flex items-center mb-8">
                <img src={Logo} alt="Logo" className=" w-8 mr-4" />
                <h2 className=" text-4xl font-semibold ">Connect</h2>
              </div>
              <p>
                Connecting patients and doctors seamlessly for remote healthcare
                solutions online.
              </p>
            </div>
            <div className="quickLinks mt-4 md:ms-20">
              <h3 className=" text-2xl mb-2 md:mb-8 font-semibold">Quick Links</h3>
              <Link to="/">
                <p className="md:ms-4">Home</p>
              </Link>
              <Link to="/">
                <p className="md:ms-4">About Us</p>
              </Link>
              <Link to="/">
                <p className="md:ms-4">Appointment</p>
              </Link>
              <Link to="/">
                <p className="md:ms-4">Blog</p>
              </Link>
            </div>
            <div className="contactUs mt-4 md:ms-20">
                <h3 className=" text-2xl mb-2 md:mb-8 font-semibold">Contact Us</h3>
              <ul>
                <li>Email: connectToThis@email.com</li>
                <li>PhoneNumber: +91 123-456-7890</li>
                <li>Address: MainStreet-1, City, Country</li>
              </ul>
            </div>
          </div>
          <hr/>
          <div className="lowerSection mt-4 md:flex justify-between">
            <div className="copyWrite">
           <p>&copy; 2024 Connect Telemed. All rights reserved.</p>
            </div>
            <div className="follow flex">
                <h4 className="mr-2">Follow Us On </h4>
                <img src={InstaIcon} alt="InstaIcon" className="w-4 mr-2 cursor-pointer" />
                <img src={FacebookIcon} alt="FacebookIcon" className="w-4 mr-2 cursor-pointer" />
                <img src={XIcon} alt="XIcon" className="w-4 mr-2 cursor-pointer" />
                <img src={LinkedInIcon} alt="LinkedInIcon" className="w-4 mr-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer
