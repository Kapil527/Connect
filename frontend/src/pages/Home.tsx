import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeHome from "../Home/WelcomeHome";
import SecondPart from "../Home/SecondPart";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authtoken")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className=" h-full">
        <div className="container h-full">
          <WelcomeHome />
          <SecondPart />
        </div>
      </div>
    </>
  );
}
