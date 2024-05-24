import { verifyOtp } from "../OTPVerification";

export default function OTPVerification({
  handleChange,
  otp,
  onNext,
}: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  otp: string;
  onNext: () => void;
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter OTP"
        name="otp"
        className="p-1 rounded mb-4 text-gray-500 placeholder:text-gray-300 border-b-2 outline-none"
        onChange={handleChange}
      />
      <button
        className="bg-sky-500 text-white text-xl text-center w-full p-1 shadow-sky-500"
        onClick={() => {
          verifyOtp(otp, onNext);
        }}
      >
        Verify
      </button>
    </>
  );
}
