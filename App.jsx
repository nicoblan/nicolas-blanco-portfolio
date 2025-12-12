import React, { useState } from 'react';

// Componente simulado para Inicio
const Inicio = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
    <h2 className="text-5xl font-bold text-gray-800">Bienvenido al Inicio</h2>
  </div>
);

// Componente simulado para Proyectos
const Proyectos = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-200 p-8">
    <h2 className="text-5xl font-bold text-gray-800">Nuestros Proyectos</h2>
  </div>
);

// Componente simulado para Habilidades
const Habilidades = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
    <h2 className="text-5xl font-bold text-gray-800">Mis Habilidades</h2>
  </div>
);

// Componente simulado para Contacto
const Contacto = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-200 p-8">
    <h2 className="text-5xl font-bold text-gray-800">Contáctanos</h2>
  </div>
);

// Componente de navegación simulado
const NavBar = ({ setActiveSection }) => {
  const handleClick = (section) => (event) => {
    event.preventDefault();
    setActiveSection(section);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-center space-x-6 z-10">
      <a href="#inicio" onClick={handleClick('inicio')} className="text-lg text-blue-600 hover:text-blue-800">
        Inicio
      </a>
      <a href="#proyectos" onClick={handleClick('proyectos')} className="text-lg text-blue-600 hover:text-blue-800">
        Proyectos
      </a>
      <a href="#habilidades" onClick={handleClick('habilidades')} className="text-lg text-blue-600 hover:text-blue-800">
        Habilidades
      </a>
      <a href="#contacto" onClick={handleClick('contacto')} className="text-lg text-blue-600 hover:text-blue-800">
        Contacto
      </a>
    </nav>
  );
};

// Componente principal App.jsx
export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Inicio />;
      case 'proyectos':
        return <Proyectos />;
      case 'habilidades':
        return <Habilidades />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="App">
      <NavBar setActiveSection={setActiveSection} />
      <main className="pt-16"> {/* Añade padding superior para evitar que el contenido se superponga con la barra de navegación */}
        {renderSection()}
      </main>
    </div>
  );
}
