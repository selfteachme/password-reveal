import React from "react";

const Eyeball = () => {
  return (
    <svg
      width="110"
      height="107"
      viewBox="0 0 110 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* bottom eye lid */}
      <path
        className="eyelid--btm"
        d="M105 71C105 71 82.6142 102 55 102C27.3858 102 5 71 5 71"
        stroke="#26C9C3"
        stroke-width="10"
        stroke-linecap="round"
      />
      {/* eye ball */}
      <path
        className="pupil"
        d="M70 70C70 78.2843 63.2843 85 55 85C46.7157 85 40 78.2843 40 70C40 61.7157 46.7157 55 55 55C63.2843 55 70 61.7157 70 70Z"
        fill="#26C9C3"
      />
      <g className="eyelid">
        {/* top eye lid */}
        <path
          className="eyelid--top"
          d="M105 70C105 70 82.6142 39 55 39C27.3858 39 5 70 5 70"
          stroke="#26C9C3"
          stroke-width="10"
          stroke-linecap="round"
        />
        {/* center eye lash */}
        <path
          className="lash--center"
          d="M54.9999 22.5V5.5"
          stroke="#26C9C3"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        {/* right eye lash */}
        <path
          className="lash--right"
          d="M91 34.9707L100.686 21"
          stroke="#26C9C3"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        {/* left eye lash */}
        <path
          className="lash--left"
          d="M9.00049 20.9996L18.6856 34.971"
          stroke="#26C9C3"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export { Eyeball };
