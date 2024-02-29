export const BasicInfo = () => {
  return (
    <>
      <div className="container bg-white rounded-xl shadow mb-8">
        <div className="basicInfo">
          <div className="heading">
            <h2 className="m-4 text-xl font-bold ml-8">Basic Info</h2>
          </div>
          <div className="info grid grid-cols-2 grid-rows-2 pl-4 pb-4 pr-4 ml-4">
            <div className={`username ${infoDivs}`}>
              <label htmlFor="username" className={`${labelsStyle}`}>
                Name
              </label>
              <input
                type="text"
                id="username"
                placeholder="Baradi kapil"
                className={`${inputsStyle}`}
              />
            </div>
            <div className={`phoneNumber ${infoDivs}`}>
              <label htmlFor="phoneNumber">PhoneNumber</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="+91 1236548789"
                className={`${inputsStyle}`}
              />
            </div>
            <div className={`dob ${infoDivs}`}>
              <label htmlFor="dob">Date Of Birth</label>
              <input
                type="text"
                id="role"
                placeholder="11/05/2000"
                className={`${inputsStyle}`}
              />
            </div>
            <div className={`role ${infoDivs}`}>
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                placeholder="Paitent"
                className={`${inputsStyle}`}
              />
            </div>
          </div>
        </div>
        <div className="updatebtn">
          <button className=" bg-sky-800 text-white hover:bg-white hover:text-sky-800 p-2 rounded shadow float-right mr-4 md:mr-16 mb-4">
            Apply Changes
          </button>
        </div>
      </div>
    </>
  );
};

const infoDivs = "flex flex-col my-4";
const labelsStyle = "text-gray-600";
const inputsStyle =
  "py-2 w-11/12 placeholder:text-gray-300 outline-none border-b border-b-gray-300 text-gray-600";
