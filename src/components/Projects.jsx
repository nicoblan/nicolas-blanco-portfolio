import React from 'react'
import { useState, useEffect } from 'react';

function ProjectCard({ title, desc, shortDesc, img, url, year, tags, onClick, className }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col h-full w-full text-left group bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-transform duration-300 transition-shadow duration-300 ${className}`}
    >
      <div className="h-48 rounded-xl overflow-hidden bg-white shadow-md mb-4">
        <img src={img} alt={title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg font-bold text-slate-800">{title}</h4>
        <span className="text-xs text-slate-400 font-medium">{year}</span>
      </div>
      <p className="text-xs text-slate-600 mb-3 line-clamp-2">{shortDesc}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-white rounded-full text-slate-600 font-medium">
            {tag}
          </span>
        ))}
      </div>
    </button>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">
              ×
            </button>
          </div>
          
          <div className="mb-4 rounded-xl overflow-hidden">
            <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-sm px-3 py-1 bg-slate-100 rounded-full text-slate-700 font-medium">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-slate-600 mb-6 leading-relaxed">{project.desc}</p>

          <div className="flex gap-3">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition text-center"
            >
              Ir al Repositorio →
            </a>
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-300 transition"
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
      title: 'Frontend Purosmates',
      shortDesc: 'Frontend de un e-commerce desarrollado con React, Vite y Tailwind CSS. Interfaz dinámica con gestión de productos y carrito de compras.',
      desc: 'El proyecto front-purosmates es el frontend de un e-commerce, desarrollado principalmente con React para crear una interfaz de usuario dinámica. Utiliza Vite como un build tool rápido para optimizar el desarrollo. La estructura básica está construida sobre HTML, CSS y JavaScript, con Tailwind CSS para un diseño ágil y de utilidad primero. Aunque la información no lo confirma, se puede asumir que usa Axios o Fetch para la comunicación con la API (p. ej., gestión de productos y carrito), y Redux para el manejo del estado global de la aplicación.', 
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
          <p className={`mt-2 text-slate-600 hb-item from-right ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '220ms' : '0ms' }}>
            Una selección de mis trabajos más recientes en desarrollo web, aplicaciones interactivas y branding. Cada proyecto representa un desafío único y una solución creativa.
          </p>
        </div>
        
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {items.map((it, i) => (
            <ProjectCard 
              key={i} 
              {...it} 
              className={`hb-item ${i % 2 === 0 ? '' : 'from-right'} ${mounted ? 'hb-enter' : ''}`}
              style={{ transitionDelay: mounted ? `${320 + i * 100}ms` : '0ms' }}
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