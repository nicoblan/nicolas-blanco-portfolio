import React from 'react'
import { useState, useEffect } from 'react';

function ProjectCard({ title, desc, shortDesc, img, url, year, tags, onClick, className, style }) {
  return (
    <button 
      onClick={onClick}
      style={style}
      className={`flex flex-col md:flex-row-reverse w-full text-left group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:scale-[1.01] transition-all duration-500 border border-slate-200/60 ${className}`}
    >
      {/* Contenedor de Imagen (Más bajo en Desktop) */}
      <div className="w-full md:w-1/3 h-48 md:h-56 overflow-hidden bg-white relative">
        <img 
          src={img} 
          alt={title} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Contenedor de Información (Más compacto) */}
      <div className="flex flex-col p-6 md:p-8 md:w-2/3 justify-center">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-2.5 py-1 rounded-full">
            {year}
          </span>
          <div className="h-[1px] flex-grow mx-4 bg-slate-100"></div>
        </div>
        
        <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h4>
        
        <p className="text-slate-600 mb-4 line-clamp-2 text-sm md:text-base leading-relaxed">
          {shortDesc}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-[10px] md:text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-500 font-medium shadow-sm group-hover:border-indigo-100 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{project.year}</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{project.title}</h3>
            </div>
            <button onClick={onClose} className="bg-slate-100 hover:bg-slate-200 text-slate-500 p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mb-6 rounded-xl overflow-hidden shadow-md">
            <img src={project.img} alt={project.title} className="w-full h-64 md:h-80 object-cover" />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs px-3 py-1.5 bg-slate-100 rounded-lg text-slate-700 font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-slate-600 text-base leading-relaxed">{project.desc}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 text-center flex items-center justify-center gap-2"
            >
              Ver Repositorio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition text-center"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMounted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('proyectos');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const items = [
    { 
      title: 'Front-PurosMates',
      shortDesc: 'Frontend de una plataforma de e-commerce desarrollada con React y Vite, orientada a ofrecer una experiencia de usuario rápida, moderna y dinámica.',
      desc: 'El proyecto Front-PurosMates es el frontend de una plataforma de e-commerce desarrollada con React, orientada a ofrecer una experiencia de usuario rápida, moderna y dinámica. La aplicación fue creada utilizando Vite como herramienta de desarrollo y compilación, lo que permite un entorno ágil y optimizado. La interfaz está construida con HTML, CSS y JavaScript, utilizando Tailwind CSS para implementar un diseño responsivo y escalable basado en utilidades. El sistema permite visualizar productos, navegar por el catálogo y gestionar interacciones típicas de una tienda online.', 
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
      url: 'https://github.com/tomasitogh/front-purosmates',
      year: '2025',
      tags: ['React', 'Vite', 'Tailwind', 'JavaScript', 'HTML', 'CSS', 'Redux']
    },
    { 
      title: 'Backend Purosmates',
      shortDesc: 'Backend de e-commerce en Java con Spring Boot. Implementa JPA, Hibernate, MySQL, JWT para autenticación y seguridad.',
      desc: 'El proyecto back-purosmates es el componente backend de un e-commerce, desarrollado en Java y utilizando el framework Spring Boot para construir la arquitectura de la aplicación y exponer endpoints REST. Se encarga de la lógica de negocio y la gestión de la base de datos, para lo cual implementa la capa de persistencia utilizando las especificaciones de JPA (Java Persistence API), con Hibernate como proveedor, que facilita la interacción con MySQL. Para manejar la seguridad y la autenticación de usuarios, se integra la implementación de JWT (JSON Web Tokens), y la librería Lombok se utiliza para reducir el código repetitivo en las clases de modelo de datos, agilizando el desarrollo.', 
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
      url: 'https://github.com/tomasitogh/back-purosmates',
      year: '2025',
      tags: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'Hibernate', 'JWT']
    },
    { 
      title: 'RoadPlan',
      shortDesc: 'Proyecto frontend de planificación de rutas. Desarrollado con React y Vite para interfaces modernas y optimizadas.',
      desc: 'El repositorio RoadPlan corresponde a un proyecto frontend centrado en la creación de interfaces de usuario. Está configurado con React para la construcción de componentes y la gestión de la lógica de la vista, utilizando Vite para un entorno de desarrollo moderno y un rendimiento de construcción optimizado. El proyecto utiliza JavaScript como lenguaje principal y su estructura se basa en archivos HTML y CSS para el marcado y el estilo visual.', 
      img: '/RoadPlan.jpeg',
      url: 'https://github.com/RodriCalvo/RoadPlan',
      year: '2025',
      tags: ['React', 'Vite', 'UI/UX']
    },
  ]

  return (
    <>
      <section id="proyectos" className="py-0">
        <div className="mb-8">
          <h3 className={`text-3xl font-bold text-slate-900 hb-item ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '120ms' : '0ms' }}>Proyectos Destacados</h3>
          <p className={`mt-3 text-slate-600 hb-item from-right ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '220ms' : '0ms' }}>
            Una selección de mis trabajos más recientes en desarrollo de software. Cada proyecto representa un desafío técnico resuelto con tecnologías modernas y buenas prácticas.
          </p>
        </div>
        
        <div className="mt-6 flex flex-col gap-6">
          {items.map((it, i) => (
            <ProjectCard 
              key={i} 
              {...it} 
              className={`hb-item ${i % 2 === 0 ? '' : 'from-right'} ${mounted ? 'hb-enter' : ''}`}
              style={{ transitionDelay: mounted ? `${320 + i * 150}ms` : '0ms' }}
              onClick={() => setSelectedProject(it)}
            />
          ))}
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  )
}