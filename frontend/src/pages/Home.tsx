import WelcomeHome from "../Home/WelcomeHome";
import SecondPart from "../Home/SecondPart";
import ThirdPart from "../Home/ThirdPart";

export default function Home() {
  return (
    <>
      <div className=" h-full">
        <div className="container h-full">
          <WelcomeHome />
          <SecondPart />
          <ThirdPart />
        </div>
      </div>
    </>
  );
}
