import React, { useState } from "react";
import { Eyeball } from "./Eyeball";
import { Lock } from "./Lock";

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={showPassword ? "wrapper" : "hidePassword wrapper"}>
      <div className="faux-box">
        <Lock />
        {showPassword ? (
          <input className="password" type="text" name="password" />
        ) : (
          <input className="password" type="password" name="password" />
        )}
        <button className="toggle" onClick={toggle}>
          <Eyeball />
        </button>
      </div>
    </div>
  );
};

export { Password };
