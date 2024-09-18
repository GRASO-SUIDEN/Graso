import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/dashboard/dashboard';
import Launch from './pages/Launch/launch';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/launch" element={<Launch />} />
      </Routes>
    </Router>
  );
}

export default App;
