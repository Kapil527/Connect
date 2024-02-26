import UserProfilePic from "/profilePic.jpg";

export const ProfilePic = () => {
  return (
    <>
      <div className="container h-1/6 w-full flex items-center p-4 shadow-2xl my-8 rounded-xl bg-white">
        <div className="image mx-4">
          <img src={UserProfilePic} alt="user profile pic" className="shadow" style={{borderRadius: "50%", width: "75px", height: "75px"}}/>
        </div>
        <div className="name">
          <h2 className="font-bold text-xl">Mukesh Ambani</h2>
          <h5 className="text-gray-500 text-sm">Paitent</h5>
        </div>
      </div>
    </>
  );
};
