
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex flex-col md:flex-row md:items-center md:gap-4 items-center">
      <div className="relative w-12 h-12 bg-white rounded-lg">
        <svg
          viewBox="0 0 48 48"
          className="w-full h-full p-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hanger hook */}
          <path
            d="M24 4C25.1046 4 26 4.89543 26 6C26 7.10457 25.1046 8 24 8C22.8954 8 22 7.10457 22 6C22 4.89543 22.8954 4 24 4Z"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* T-shirt body and sleeves */}
          <path
            d="M16 22H32M14 22V40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40V22M16 22L20 14M32 22L28 14M20 14H28M20 14C20 12 22 10 24 10C26 10 28 12 28 14"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          {/* Heart symbol - moved to left chest (viewer's right) */}
          <path
            d="M19 28C19 28 20 27 21.5 27C23 27 24 28 24 28C24 28 25 27 26.5 27C28 27 29 28 29 28V31C29 31 27 33 24 33C21 33 19 31 19 31V28Z"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="text-center md:text-left">
        <h1 className="font-inter font-bold text-2xl tracking-wide text-black">
          ReWear<span className="text-xs align-super">™</span>
        </h1>
        <p className="text-[0.65rem] font-inter tracking-wider text-black uppercase">
          Buy & Sell Pre-loved Items
        </p>
      </div>
    </Link>
  );
};

export default Logo;
