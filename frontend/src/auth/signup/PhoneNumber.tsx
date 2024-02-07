import { Link } from "react-router-dom";

import { sendOtp } from "../OTPVerification";

export default function PhoneNumber({
  handleChange,
  phoneNumber,
  onNext,
}: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  phoneNumber: string;
  onNext: () => void;
}) {
  return (
    <>
      <input
        type="text"
        placeholder="PhoneNumber"
        name="phoneNumber"
        className="p-1 rounded mb-4 text-gray-500 placeholder:text-gray-300 border-b-2 outline-none"
        onChange={handleChange}
      />
      <div id="recaptcha"></div>
      <button
        className="bg-sky-500 text-white text-xl text-center w-full p-1 shadow-sky-500"
        onClick={() => {
          sendOtp(phoneNumber, onNext);
        }}
      >
        Send OTP
      </button>
      <div className="forgetSection flex justify-between my-4">
        <div>
          <>
            <small>
              Alreay Have an account?
              <Link to="/login" className="text-sky-500">
                Login
              </Link>
            </small>
          </>
        </div>
      </div>
    </>
  );
}
