import React from "react";

const Lock = () => {
  return (
    <svg
      className="lock"
      width="86"
      height="112"
      viewBox="0 0 86 112"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41 10H45C58.8071 10 70 21.1929 70 35V53L16 53V35C16 21.1929 27.1929 10 41 10ZM6.0096 53.8279C6.00321 53.5527 6 53.2767 6 53V35C6 15.67 21.67 0 41 0H45C64.33 0 80 15.67 80 35V53C80 53.2767 79.9968 53.5527 79.9904 53.8279C83.5273 55.3688 86 58.8956 86 63V102C86 107.523 81.5229 112 76 112H10C4.47715 112 0 107.523 0 102V63C0 58.8956 2.47266 55.3688 6.0096 53.8279Z"
      />
    </svg>
  );
};

export { Lock };
