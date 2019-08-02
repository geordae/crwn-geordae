import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    //long as we dont pass in a value, and only the prop isgooglesignin will be true
    className={`${inverted ? "inverted" : ""}${
      isGoogleSignIn ? "google-sign-in" : ""
    }  custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
