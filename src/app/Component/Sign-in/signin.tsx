import React from "react";
import "./sign.scss";

const Signin: React.FC = () => {
  return (
    <div className="main-layout">
      <div className="form-div-main">
        <div className="form-main">
          <div>
            <h1 className="header-sign">Sign in</h1>
            <div className="input-box">
              <input type="text" required={true} />
              <span>Username</span>
              <i></i>
            </div>
            <div className="input-box">
              <input type="password" required={true} />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links-signin">
              <a href="/about">Forgot Password</a>
              <a href="/signup">SignUp</a>
            </div>
            <input type="submit" value="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
