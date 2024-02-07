import { useState } from "react";

const DropdownMenu = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "No", label: "No" },
    { value: "Yes", label: "Yes" },
  ];

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const downarrow = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  };

  return (
    <div className="dropdown">
        <label>Are you a doctor?</label>
        <div
          className="dropdown-header cursor-pointer mx-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className="flex">
            {selectedValue || "Select an option"}
            {downarrow()}
          </p>
        </div>
      {isOpen && (
        <ul className="dropdown-list  cursor-pointer">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
