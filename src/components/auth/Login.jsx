import React from "react";
import { Link } from "react-router-dom";
import loginHelper from "../../helper/login-helper";

const Login = () => {
  const { formData, handleFormChange, handleFormSubmit } = loginHelper();

  return (
    <>
      <div className="container-fluid vw-100">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-lg-3">
            <h2>Sign In</h2>
          </div>

          <div className="col-lg-3">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  onChange={handleFormChange}
                  name="email"
                  value={formData.email}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  onChange={handleFormChange}
                  name="password"
                  value={formData.password}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>

              <button className="btn btn-primary w-100">Sign In</button>

              <p>
                Don't have an account?{" "}
                <span>
                  <Link to={"/"}>Registration </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
