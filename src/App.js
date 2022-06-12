import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

import LoginPage from './pages/Authorization/LoginPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/*" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
