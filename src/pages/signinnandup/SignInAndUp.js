import React from "react";
import "./SignInAndUp.scss";
import Signin from "../../components/signin/Signin";
import Signup from "../../components/sign-up/Signup";

const SignInAndUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default SignInAndUp;
