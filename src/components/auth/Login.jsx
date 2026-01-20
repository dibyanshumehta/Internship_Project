import React from "react";
import { Link } from "react-router-dom";
import loginHelper from "../../helper/login-helper";

const Login = () => {
  const { formData, handleFormChange, handleFormSubmit } = loginHelper();

  return (
    <>
      <div className="container mt-5 ">
        <div className="row justify-content-center text-center">
          <div className="col-lg-4">
            <h2>Sign In</h2>
          </div>
        </div>

        <div className="col-lg-4">
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
    </>
  );
};

export default Login;
