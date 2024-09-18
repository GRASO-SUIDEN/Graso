import { useState } from "react";

function MobileNav({ children, height }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-md:flex md:hidden flex-col items-center w-full relative top-0 left-0 z-20 bg-gradient-to-r from-[#acabab6b] to-[#99783a]">
      <div className="w-full p-4 flex justify-between items-center ">
        <h2 className="text-white font-bold">Graso</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="max-md:block md:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-[50vh] max-sm:h-[${height}] bg-gradient-to-r from-[#acabab6b] to-[#99783a] transform transition-transform duration-300 -z-[5] ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center space-y-4 p-4 text-white">
          {children}
        </ul>
      </div>
    </nav>
  );
}

export default MobileNav;
