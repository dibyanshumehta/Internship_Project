import React from "react";
import { Link } from "react-router-dom";
import registrationHelper from "../../helper/signup-Helper";

const Signup = () => {
  const {formData, handleFormChange, handleFormSubmit} = registrationHelper();
  return (
    <>
      <div className="container-fluid vw-100">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-lg-4">
            <h2>Sign Up</h2>
            <p>Make your id to be the part of this project.</p>
          </div>
          <div className="col-lg-4">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  First Name
                </label>
                <input
                  name="fname"
                  value={formData.fname}
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter first name"
                  onChange={handleFormChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  Last Name
                </label>
                <input
                  name="lname"
                  value={formData.lname}
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter last name"
                  onChange={handleFormChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="profession" className="form-label">
                  Profession
                </label>
                <input
                  name="profession"
                  value={formData.profession}
                  onChange={handleFormChange}
                  type="text"
                  className="form-control"
                  id="profession"
                  placeholder="Enter your profession"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleFormChange}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <button className="btn btn-primary w-100">Sign Up</button>
              <p>
                Already a user?{" "}
                <span>
                  <Link to={"/login"}>Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
