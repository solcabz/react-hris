import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/admin/Home";
import Jobinfo from "./Components/admin/Jobinfo";
import Personarequest from "./Components/admin/Personarequest";
import Dailytimerecord from "./Components/admin/Dailytimerecord.jsx";
import SystemAccess from "./Components/admin/SystemAccess.jsx";
import Login from "./Components/Login.jsx";
import Sidebar from "./Components/admin/Sidebar.jsx";
import UserHome from "./Components/user/Home";
import UserSidebar from "./Components/user/Sidebar.jsx";

function App() {
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  // Assume you have a function to check the role of the user
  const getUserRole = () => {
    // Replace this logic with your actual authentication and role checking logic
    return user ? user.role : null;
  };

  const handleLogout = () => {
    // Clear the user information (replace with your actual logic)
    setUser(null);

    // Optionally, clear the authentication information from storage
    sessionStorage.removeItem("user"); // or localStorage.removeItem("user");

    // Redirect to the login page or another appropriate location
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              // If the user is logged in, redirect based on their role
              getUserRole() === "admin" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/user" />
              )
            ) : (
              // If not logged in, show the login page
              <Login onLogin={(userData) => setUser(userData)} />
            )
          }
        />
        <Route
          path="/admin/*"
          element={
            user && getUserRole() === "admin" ? (
              <div className="flex w-auto ">
                {/* Admin Sidebar */}
                <Sidebar />
                <div className="p-4 flex-1 h-screen w-[1800px] overflow-x-auto">
                  <Routes>
                    <Route index element={<Home />} />
                    <Route
                      path="manage/personarequest"
                      element={<Personarequest />}
                    />
                    <Route
                      path="manage/dailytimerecord"
                      element={<Dailytimerecord />}
                    />
                    <Route path="manage/jobinfo" element={<Jobinfo />} />
                    <Route
                      path="settings/systemaccess"
                      element={<SystemAccess onLogout={handleLogout} />}
                    />
                  </Routes>
                </div>
              </div>
            ) : (
              // If not admin, redirect to login
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/user/*"
          element={
            user && getUserRole() === "user" ? (
              <div className="flex">
                <UserSidebar />
                <div className="p-7 font-semibold flex-1 h-screen items-center ">
                  <Routes>
                    <Route
                      index
                      element={<UserHome onLogout={handleLogout} />}
                    />
                    {/* Add more nested routes if needed */}
                  </Routes>
                </div>
              </div>
            ) : (
              // If not user, redirect to login
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
