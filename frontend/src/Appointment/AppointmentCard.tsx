const AppointmentCard = () => {
  return (
    <>
      <div className="w-full h-full flex items-center">
        <div className="container w-full">
          <div className="card flex flex-col items-center shadow p-4">
            <div className="heading">
              <h3>Book Your Appointment Now</h3>
            </div>
            <div className="inputs flex flex-col items-center">
              <input
                type="text"
                placeholder="Paitent Name"
                className={`paitentName ${inputDesign}`}
              />
              <input
                type="text"
                placeholder="Paitent Age"
                className={`paitentAge ${inputDesign}`}
              />
              <input
                type="text"
                placeholder="Disease"
                className={`disease ${inputDesign}`}
              />
              <input
                type="datetime-local"
                className={`startTime ${inputDesign}`}
              />
            </div>
            <div className="button">
              <button className="p-4 rounded bg-sky-800 text-white mr-4 hover:bg-white hover:text-sky-800 border border-black/50">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;

const inputDesign =
  "p-1 rounded my-2 text-black placeholder:text-black border border-black outline-none";
