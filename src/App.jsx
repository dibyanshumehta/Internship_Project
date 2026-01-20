import {Route, Routes} from 'react-router-dom';
// import DashboardPage from './components/dashboard/Dashboard.jsx';
import { useEffect, useState } from 'react';
import ProtectedRoute from "./components/routes/ProtectedRoute.jsx";
import Signup from './components/auth/signup.jsx';
import Login from './components/auth/login.jsx';
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
      <Routes>
        <Route
          path="/" element={<Signup/>}
        />
        <Route
          path="/login" element={<Login/>}
        />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        /> */}
      </Routes>

    </>
  );
}

export default App;