import React from "react";
import { Link } from "react-scroll";

import "./arrow_div.css";

const ArrowDiv = () => {
  return (
    <span className="fixed bottom-16 text-4xl transform transition-transform duration-300 hover:scale-110 hover:filter-glow">
      <Link to="secondPage" smooth={true} duration={500}>
        <div className="arrow-container arrow-container-animation cursor-pointer">
          <div
            className="flex flex-1 justify-center items-center"
            style={{ marginBottom: "0.3rem" }}
          >
            <div
              className="flex border-t h-auto arrow-horz-bar w-full"
              style={{
                animationDelay: `0.4s`,
                width: "86%",
              }}
            />
          </div>
          <SvgArrow />
        </div>
      </Link>
    </span>
  );
};

const SvgArrow = () => {
  return (
    <div className="flex flex-1">
      <svg
        className="flex justify-center items-center"
        viewBox="0 0 120 120"
        height="48"
        width="48"
      >
        <path d="M 10 0 L 60 50 L 110 0 Z" fill="#d3f2f1" />
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="5" flood-color="#00ffff" />
          <feDropShadow dx="1" dy="1" stdDeviation="4" flood-color="#35cde8" />
          <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#0d9191" />
        </filter>
        <path
          d="M 10 0 L 60 50 L 110 0 Z"
          fill="none"
          stroke="#35cde8"
          strokeWidth="1.3"
          filter="url(#shadow)"
          className="arrow hover:shadow-lg"
        />
      </svg>
    </div>
  );
};

export default ArrowDiv;
