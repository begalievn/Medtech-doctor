// modules
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// components
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/Authorization/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import RequireAuth from "./components/Auth/require-auth/RequireAuth";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


// constants
import { ROLES } from "./utils/consts/constants";

function App() {

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
      >
        <Route path="/main" element={<MainPage />} />
        <Route path="/home/*" element={<HomePage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
}

export default App;
