import UserIcon from "/user-icon.png"
import DashboardIcon from "/dashboardIcon.png";
import BillingIcon from "/billing-icon.svg";
import MessageIcon from "/messageIcon.png";

const NavigateCard = () => {
  return (
    <>
      <div className="containter h-1/2 my-8 mx-4 w-1/4">
        <div className="card shadow-xl rounded-xl bg-white p-4">
          <div className={`profile ${divsStyle}`}>
            <div className="icon"><img
                src={UserIcon}
                alt="user icon"
                className={`${iconStyle}`}
              /></div>
            <div className={`text ${textStyle}`}>
              <p>Profile</p>
            </div>
          </div>
          <div className={`billing ${divsStyle}`}>
            <div className="icon">
              <img
                src={BillingIcon}
                alt="billing icon"
                className={`${iconStyle}`}
              />
            </div>
            <div className={`text ${textStyle}`}>
              <p>Billing</p>
            </div>
          </div>
          <div className={`message ${divsStyle}`}>
            <div className="icon">
              <img
                src={MessageIcon}
                alt="message icon"
                className={`${iconStyle}`}
              />
            </div>
            <div className={`text ${textStyle}`}>
              <p>Messages</p>
            </div>
          </div>
          <div className={`dashboard ${divsStyle}`}>
            <div className="icon">
              <img
                src={DashboardIcon}
                alt="dashboard icon"
                className={`${iconStyle}`}
              />
            </div>
            <div className={`text ${textStyle}`}>Dashboard</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigateCard;

const iconStyle = "w-[25px] h-[25px]";
const divsStyle = "p-4 flex items-center hover:bg-gray-200 cursor-pointer hover:rounded-xl";
const textStyle = "mx-4";

