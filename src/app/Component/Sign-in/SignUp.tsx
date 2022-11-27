import React from 'react'
import "./signup.scss";

function SignUp() {
  return (
    <div className="main-layout-create">
    <div className="form-div-main-create">
      <div className="form-main-create">
        <div>
          <h1 className="header-sign-create">Sign Up</h1>
          <div className="input-box-create">
            <input type="text" required={true} />
            <span>Username</span>
            <i></i>
          </div>
          <div className="input-box-create">
            <input type="text" required={true} />
            <span>Email</span>
            <i></i>
          </div>
          <div className="input-box-create">
            <input type="password" required={true} />
            <span>Password</span>
            <i></i>
          </div>
          <div className="input-box-create">
            <input type="password" required={true} />
            <span>Password</span>
            <i></i>
          </div>
      
          <div className="links-signup-create">
            <a href="/signin">SignIn</a>
          </div>
          <div className='create-login'><input type="submit" value="Create" /></div>
       
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp