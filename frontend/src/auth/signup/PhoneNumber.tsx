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
        className="py-1.5 px-4 rounded bg-sky-800 text-white mr-4 hover:bg-white hover:text-sky-800 border border-black/50 block mx-auto w-full"
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
              <Link to="/login" className="text-sky-800">
                Login
              </Link>
            </small>
          </>
        </div>
      </div>
    </>
  );
}
