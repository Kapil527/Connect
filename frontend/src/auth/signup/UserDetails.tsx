import { useState } from "react";

export default function UserDetails({
  handleChange,
  handleOnClick,
  handleRole,
}: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClick: (event: React.MouseEvent) => void;
  handleRole: (value: string) => void;
}) {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="UserName"
        name="username"
        className="p-1 rounded mb-4 text-gray-500 placeholder:text-gray-300 border-b-2 outline-none"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="p-1 rounded mb-4 text-gray-500 placeholder:text-gray-300 border-b-2 outline-none"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Comfirm Password"
        name="cPassword"
        className="p-1 rounded mb-4 text-gray-500 placeholder:text-gray-300 border-b-2 outline-none"
        onChange={handleChange}
      />
      <div className="flex items-center">
        <label
          htmlFor="doc-confirmation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-2"
        >
          Are you a doctor?
        </label>
        <select
          id="doc-confirmation"
          defaultValue="no"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-fit"
          onChange={(event) => {
            setValue(event.target.value)
            handleRole(value);
          }}
        >
          <option value="no">No</option>
          <option value="yes">yes</option>
        </select>
      </div>
      <button
        className="bg-sky-500 text-white text-xl text-center w-full p-1 shadow-sky-500"
        onClick={handleOnClick}
      >
        SignUp
      </button>
    </>
  );
}
