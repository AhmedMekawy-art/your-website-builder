
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex flex-col items-center">
      <div className="relative w-12 h-12">
        <svg
          viewBox="0 0 48 48"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hanger */}
          <path
            d="M24 8C25.1046 8 26 7.10457 26 6C26 4.89543 25.1046 4 24 4C22.8954 4 22 4.89543 22 6C22 7.10457 22.8954 8 24 8Z"
            fill="#FAF9F6"
          />
          <path
            d="M44 24L24 12L4 24V28L24 16L44 28V24Z"
            fill="#FAF9F6"
          />
          {/* T-shirt */}
          <path
            d="M14 22V40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40V22"
            stroke="#FAF9F6"
            strokeWidth="2"
            fill="none"
          />
          {/* Heart */}
          <path
            d="M21 28C21 28 22 27 23.5 27C25 27 26 28 26 28C26 28 27 27 28.5 27C30 27 31 28 31 28V31C31 31 29 33 26 33C23 33 21 31 21 31V28Z"
            fill="#E26D5A"
          />
        </svg>
      </div>
      <div className="text-center">
        <h1 className="font-heading font-bold text-xl tracking-wide">
          ReWear<span className="text-xs align-super">™</span>
        </h1>
        <p className="text-[0.65rem] font-medium tracking-wider">
          BUY & SELL PRELOVED ITEMS
        </p>
      </div>
    </Link>
  );
};

export default Logo;
