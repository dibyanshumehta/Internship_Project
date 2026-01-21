import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import EntitySection from "./EntitySection";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/auth/me")
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="container">
        <div className="row vh-100 vw-100">
          <div className="col-lg-12">
            <Navbar />
          </div>
          <div className="col-lg-12">
            {/* User Info */}
            (user && (
            <div className="container mt-4">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h4>
                    Welcome, {user.fname} {user.lname}
                  </h4>
                  <p className="mb-1">
                    <b>Email:</b> {user.email}
                  </p>
                  <p className="mb-1">
                    <b>Profession:</b> {user.profession}
                  </p>
                </div>
              </div>

              {/* CRUD Section */}
               <EntitySection />
            </div>
            ))
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
