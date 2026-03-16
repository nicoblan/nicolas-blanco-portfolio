import React, { useState, useEffect } from 'react'

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="sobre-mi" className="py-0">
      <div className="grid md:grid-cols-2 gap-4 items-center">
        {/* Texto */}
        <div>
          <p className={`text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2 hb-item ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '120ms' : '0ms' }}></p>
          <h3 className={`text-4xl font-bold text-slate-900 mb-4 leading-tight hb-item from-right ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '220ms' : '0ms' }}>
            Más que código,<br />construyo soluciones.
          </h3>
          <div className="space-y-2 text-slate-600">
            <p className={`hb-item ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '320ms' : '0ms' }}>
              Hola, soy Nicolas. Desde pequeño me obsesiona cómo funcionan las cosas. Hoy, canalizo esa curiosidad creando interfaces digitales que no solo se ven bien, sino que se sienten naturales y resuelven problemas reales.
            </p>
            <p className={`hb-item from-right ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '420ms' : '0ms' }}>
              Estudiante de ingeniería en informática en UADE, soy una persona curiosa y orientada al aprendizaje continuo, buscando constantemente nuevos retos que me permitan aplicar mis conocimientos y colaborar en proyectos que hagan una diferencia.
            </p>
            <p className={`hb-item ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '520ms' : '0ms' }}>
              Con un enfoque en el trabajo en equipo y una mentalidad proactiva, estoy comprometido con la búsqueda de soluciones eficientes y sostenibles en el ámbito de la tecnología.
            </p>
            <p className={`font-semibold text-slate-800 hb-item from-right ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '620ms' : '0ms' }}>
              Actualmente estoy buscando una pasantía o un trabajo flexible e híbrido que me permita continuar con mis estudios y a la vez ganar experiencia en el campo laboral.
            </p>
          </div>

          {/* Áreas de interés */}
          <div className={`mt-6 flex flex-wrap gap-4 hb-item ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '720ms' : '0ms' }}>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="text-sm font-medium text-slate-700">Desarrollo Full Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
              <span className="text-sm font-medium text-slate-700">UI/UX Design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <span className="text-sm font-medium text-slate-700">Problem Solving</span>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className={`flex justify-center md:justify-end hb-item from-right ${mounted ? 'hb-enter' : ''}`} style={{ transitionDelay: mounted ? '820ms' : '0ms' }}>
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/foto-perfil.jpeg" 
                alt="Nicolas Blanco" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoración */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
