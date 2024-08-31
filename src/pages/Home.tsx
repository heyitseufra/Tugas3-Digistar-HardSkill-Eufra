// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center h-screen p-4 ${theme === 'light' ? 'bg-pink-100 text-pink-900' : 'bg-gray-900 text-white'}`}>
      <div className="text-center">
        <div className="flex justify-center items-center">
          <div className={`rounded-full overflow-hidden mb-4 border-4 ${theme === 'light' ? 'border-pink-900' : 'border-white'} w-40 h-40`}>
            <img
              src="/images/eufra photo.jpeg"
              alt="Brigitta Mery Rosarie Eufra Nilapaksi"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <h1 className={`text-4xl font-bold ${theme === 'light' ? 'text-pink-900' : 'text-white'}`}>Brigitta Mery Rosarie Eufra Nilapaksi</h1>
        <p className={`my-4 text-lg ${theme === 'light' ? 'text-pink-700' : 'text-gray-400'}`}>
          Dive into my world. Discover my journey and let's connect!
        </p>
      </div>

      <div className={`bg-white rounded-lg shadow-lg p-6 max-w-xl text-center mb-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-700'}`}>
        <p className="text-sm font-medium">
          Committed Informatics Engineering Student at University of Brawijaya with a solid background in data analysis
          and problem-solving. Skilled in Python, SQL, and Power BI, with a keen interest in statistical analysis and data
          science. Eager to contribute enthusiasm, adaptability, and a fresh perspective to a dynamic team. Actively involved
          in diverse academic and extracurricular activities, dedicated to personal growth, integrity, and expanding
          professional connections.
        </p>
      </div>
      <div className={`mt-4 space-y-2 ${theme === 'light' ? 'text-pink-600' : 'text-gray-400'} flex flex-col items-center mb-12`}>
  <Link to="mailto:brigittaeufra66@gmail.com" target="_blank" className={`${theme === 'dark' ? 'text-gray-200' : 'hover:underline'} mt-2`}>
    Email: brigittaeufra66@gmail.com
  </Link>
  <Link
    to="https://www.linkedin.com/in/brigitta-eufra/"
    target="_blank"
    className={`${theme === 'dark' ? 'text-gray-200' : 'hover:underline'} mt-2`}
  >
    Linkedin: linkedin.com/in/brigitta-eufra
  </Link>
  {/* Tambahkan elemen kosong dengan tinggi untuk memberikan ruang */}
  <div className={`${theme === 'light' ? 'bg-pink-100' : 'bg-gray-900'} h-16`}></div>
</div>
    </div>
  );
};

export default Home;
