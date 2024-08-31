import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="theme-switcher bg-gray-900 text-white px-4 py-2 rounded-md">
      {/* Emoji untuk mode terang dan gelap */}
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
      <nav className="px-16 py-6 flex justify-between items-center">
  <div className="flex items-center">
    <img src="/images/logo.png" alt="Logo" className="h-6 mr-4" />
    <nav className="flex space-x-8">
      <Link to="/" className="text-lg">
        Home
      </Link>
      <Link to="/projects" className="text-lg">
        Projects
      </Link>
    </nav>
  </div>
  <ThemeSwitcher />
</nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
