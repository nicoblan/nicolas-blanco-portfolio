import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Inicio from './views/Inicio';
import Proyectos from './views/Proyectos';
import SobreMi from './views/SobreMi';
import Habilidades from './views/Habilidades';
import Contacto from './views/Contacto';

export default function App() {
  return (
    <Router>
      <div className="bg-slate-50 min-h-screen text-slate-900">
        <header className="py-4 sticky top-0 z-50 flex justify-center">
          <nav className="bg-white/80 backdrop-blur rounded-full shadow-lg px-6 py-3 flex gap-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-5 py-2 text-sm rounded-full transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:text-blue-600'
                }`
              }
            >
              Inicio
            </NavLink>
            <NavLink 
              to="/proyectos" 
              className={({ isActive }) => 
                `px-5 py-2 text-sm rounded-full transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:text-blue-600'
                }`
              }
            >
              Proyectos
            </NavLink>
            <NavLink 
              to="/sobre-mi" 
              className={({ isActive }) => 
                `px-5 py-2 text-sm rounded-full transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:text-blue-600'
                }`
              }
            >
              Sobre mí
            </NavLink>
            <NavLink 
              to="/habilidades" 
              className={({ isActive }) => 
                `px-5 py-2 text-sm rounded-full transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:text-blue-600'
                }`
              }
            >
              Habilidades
            </NavLink>
            <NavLink 
              to="/contacto" 
              className={({ isActive }) => 
                `px-5 py-2 text-sm rounded-full transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:text-blue-600'
                }`
              }
            >
              Contacto
            </NavLink>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <footer className="mt-12 text-center text-sm text-slate-500 pb-12">
            <span>© {new Date().getFullYear()} Nicolas Blanco</span>
          </footer>
        </main>
      </div>
    </Router>
  );
}