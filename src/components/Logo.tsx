
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex flex-col items-center">
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
            stroke="#F97316"
            strokeWidth="2"
          />
          {/* T-shirt body and sleeves */}
          <path
            d="M16 22H32M14 22V40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40V22M16 22L20 14M32 22L28 14M20 14H28M20 14C20 12 22 10 24 10C26 10 28 12 28 14"
            stroke="#F97316"
            strokeWidth="2"
            fill="none"
          />
          {/* Heart symbol */}
          <path
            d="M21 28C21 28 22 27 23.5 27C25 27 26 28 26 28C26 28 27 27 28.5 27C30 27 31 28 31 28V31C31 31 29 33 26 33C23 33 21 31 21 31V28Z"
            fill="none"
            stroke="#F97316"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="text-center">
        <h1 className="font-amatic font-bold text-2xl tracking-wide text-black">
          ReWear<span className="text-xs align-super">™</span>
        </h1>
        <p className="text-[0.65rem] font-sans tracking-wider text-black">
          BUY & SELL PRELOVED ITEMS
        </p>
      </div>
    </Link>
  );
};

export default Logo;
