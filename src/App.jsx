import {Route, Routes} from 'react-router-dom';
// import DashboardPage from './components/dashboard/Dashboard.jsx';
import { useEffect, useState } from 'react';
import ProtectedRoute from "./components/routes/ProtectedRoute.jsx";
import Signup from './components/auth/signup.jsx';
import Login from './components/auth/login.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
function App() {
  const [authToken, setAuthToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(true);
    }
  });
  return (
    <>
    {/* <Dashboard /> */}
    {/* <Navbar/> */}
      <Routes>
        <Route
          path="/" element={<Signup/>}
        />
        <Route
          path="/login" element={<Login/>}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

    </>
  );
}

export default App;