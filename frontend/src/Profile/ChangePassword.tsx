export const ChangePassword = () => {
  return (
    <>
      <div className="container w-full bg-white rounded shadow my-4">
        <div className="heading my-4 ml-4 md:ml-8">
          <h5 className="text-xl font-bold">Change Password</h5>
        </div>
        <div className="inputs w-full">
          <input type="password" placeholder="Current Password" className={`${inputsStyle}`}/>
          <input type="password" placeholder="New Password" className={`${inputsStyle}`}/>
          <input type="password" placeholder="Confirm Password" className={`${inputsStyle}`}/>
        </div>
        <div className="updatebtn">
            <button className=" bg-sky-800 text-white hover:bg-white hover:text-sky-800 p-2 mb-4 rounded shadow float-right mr-4 md:mr-16 my-2">Update Password</button>
        </div>
      </div>
    </>
  );
};

const inputsStyle = "w-11/12 p-2 ml-4 md:ml-8 my-2 border border-gray-500 border-opacity-50 outline-none placeholder:text-gray-300 rounded"
