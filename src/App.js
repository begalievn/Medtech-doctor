import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

import LoginPage from './pages/Authorization/LoginPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/*" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/home/*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
