import Doctors from "/home2.jpg";
import Support from "/AllTimeSupport.svg";
import DoctorIcon from "/DoctorIcon.png";
import SpecialistIcon from "/DoctorSpecialist.svg";

const SecondPart = () => {
  return (
    <>
      <div className=" bg-sky-800 lg:flex md:items-center my-4 h-full w-full">
        <div className="image w-full lg:w-1/2 lg:p-8">
          <img src={Doctors} alt="Doctors" className="md:opacity-90 lg:ml-4" />
        </div>
        <div className="whyChosseUs lg:w-1/2 p-8">
          <div className="card rounded bg-white/10 h-full p-4 md:p-8 text-white shadow-sm">
            <h5 className=" text-lg">WHY CHOOSE US</h5>
            <h2 className="text-4xl md:text-6xl font-semibold  mb-4">
              Bringing Loving Care to Health Care
            </h2>
            <div className="support m-4">
              <div className="heading flex items-center">
                <div className="image bg-white rounded-3xl p-1 mr-2">
                  <img src={Support} alt="Support" className="size-8" />
                </div>
                <h3 className="text-2xl mt-4 md:mt-0">24/7 Doctors Available</h3>
              </div>
              <p className="ml-12">
                Access skilled doctors anytime, anywhere &#45; 24/7 availability
                guaranteed.
              </p>
            </div>
            <div className="doctors m-4">
              <div className="heading flex items-center">
                <div className="image bg-white rounded-3xl p-1 mr-2">
                  <img src={DoctorIcon} alt="DoctorIcon" />
                </div>
                <h3 className="text-2xl mt-4 md:mt-0">Private & secure consultations</h3>
              </div>
              <p className="ml-12">
                Confidential, secure consultations with trusted doctors.
              </p>
            </div>
            <div className="specialist m-4">
              <div className="heading flex items-center">
                <div className="image bg-white rounded-3xl p-1 mr-2">
                  <img
                    src={SpecialistIcon}
                    alt="SpecialistIcon"
                    className="size-8"
                  />
                </div>
                <h3 className="text-2xl mt-4 md:mt-0">Specialist & Trusted Doctor</h3>
              </div>
              <p className="ml-12">
                Connect with specialist doctors, trusted healthcare
                professionals instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPart;
