import WelcomeHome from "../Home/WelcomeHome";
import SecondPart from "../Home/SecondPart";

export default function Home() {
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
