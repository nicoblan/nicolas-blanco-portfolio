import React from 'react'

export default function Habilidades() {
  const languages = [
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'SQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
  ];

  const frameworks = [
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'Spring Boot', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' },
    { name: 'Vite', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  ];

  const libraries = [
    { name: 'Redux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' },
    { name: 'Pandas', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg' },
    { name: 'Matplotlib', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg' },
    { name: 'JWT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' },
  ];

  const tools = [
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
    { name: 'Figma', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
    { name: 'Office', icon: 'https://img.icons8.com/color/96/microsoft-office-2019.png' },
  ];

  const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
    <div className="w-16 h-16 flex items-center justify-center mb-3">
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-full h-full object-contain"
      />
    </div>
    <p className="text-sm font-semibold text-slate-700 text-center">{skill.name}</p>
  </div>
);

  return (
    <section id="habilidades" className="py-8">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-2">Tecnologías</h3>
        <p className="text-slate-600">
          Herramientas y tecnologías con las que trabajo
        </p>
      </div>

      {/* Lenguajes */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-slate-800 mb-4">Lenguajes</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {languages.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-slate-800 mb-4">Frameworks</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {frameworks.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Librerías */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-slate-800 mb-4">Librerías</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {libraries.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Herramientas */}
      <div>
        <h4 className="text-xl font-bold text-slate-800 mb-4">Herramientas</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}