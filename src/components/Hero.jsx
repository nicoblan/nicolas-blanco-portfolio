// Hero.jsx - simplifica este componente
import React from 'react'

export default function Hero() {
  return (
    <div className="grid gap-2 items-center text-center max-w-4xl mt-8">
      <div>
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Hola, soy <span className="text-indigo-600">Nicolas Blanco</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Estudiante de tercer año de Ingeniería Informática. Actualmente me encuentro explorando activamente el sector tecnológico, abierto a nuevas experiencias profesionales en diversas áreas (desarrollo, análisis, testing, etc.). He creado este portafolio como una herramienta integral para mostrar mis proyectos, habilidades y la aplicación práctica de mis conocimientos académicos, facilitando así el contacto con empresas y profesionales del sector
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="https://github.com/nicoblan" target="_blank" rel="noopener noreferrer" className="inline-block p-3 bg-gray-800 text-white rounded-full shadow hover:opacity-95">
            <img src="https://img.icons8.com/material-rounded/24/ffffff/github.png" alt="GitHub" className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-blanco-ba57a8335" target="_blank" rel="noopener noreferrer" className="inline-block p-3 bg-blue-700 text-white rounded-full shadow hover:opacity-95">
            <img src="https://img.icons8.com/material-rounded/24/ffffff/linkedin--v1.png" alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a href="#contacto" className="inline-block p-3 border border-slate-200 rounded-full hover:bg-slate-50">
            <img src="https://img.icons8.com/material-rounded/24/000000/filled-message.png" alt="Contact" className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-6">
  <button 
    onClick={() => {
      const link = document.createElement('a');
      link.href = '/CV-Nicolas-Blanco.pdf';
      link.download = 'CV-Nicolas-Blanco.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
    className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors cursor-pointer"
  >
    Descargar CV
  </button>
</div>
      </div>
    </div>
  )
}