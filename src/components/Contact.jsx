import React from 'react'

export default function Contact() {
  return (
    <section id="contacto" className="py-0">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold">Contacto</h3>
        <p className="mt-3 text-slate-600">
          Estoy disponible a <span className="text-red-600 font-semibold">nuevas oportunidades!</span>
        </p>
        
        <div className="mt-8 flex flex-col items-center gap-6">
          {/* Ubicación */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Ubicación</p>
            <p className="text-slate-800 font-medium">Buenos Aires, Argentina</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Email</p>
            <a href="mailto:blanconicolas139@gmail.com" className="text-slate-800 font-medium hover:text-indigo-600 transition">
              blanconicolas139@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-wide">LinkedIn</p>
            <a 
              href="https://www.linkedin.com/in/nicolas-blanco-ba57a8335" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-800 font-medium hover:text-indigo-600 transition"
            >
              Nicolas Blanco
            </a>
          </div>

          {/* Teléfono */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Teléfono</p>
            <a href="tel:+541136020311" className="text-slate-800 font-medium hover:text-indigo-600 transition">
              +54 11 3602-0311
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
