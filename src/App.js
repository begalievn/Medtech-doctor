import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

import LoginPage from "./pages/Authorization/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

import RequireAuth from "./components/Auth/require-auth/RequireAuth";
import { ROLES } from "./utils/consts/constants";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/*" element={<LoginPage />} />

      {/* We want to protect these routes */}
      <Route
        element={
          <RequireAuth
            allowedRoles={[ROLES.SUPERADMIN, ROLES.ADMIN, ROLES.DOCTOR]}
          />
        }
      ></Route>
      <Route path="/main" element={<MainPage />} />
      <Route path="/home/*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
