import React from "react";

export default function Skills() {
  const skillsData = {
    frontend: [
      { name: "HTML", image: "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true" },
      { name: "CSS", image: "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/css.png?raw=true" },
      { name: "JavaScript", image: "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true" },
      { name: "React", image: "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true" },
      { name: "Flutter", image: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
      { name: "Angular", image: "https://img.icons8.com/?size=100&id=l9a5tcSnBwcf&format=png&color=000000" },
    ],
    backend: [
      { name: "SpringBoot", image: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
      { name: "Django", image: "https://img.icons8.com/?size=100&id=IuuVVwsdTi2v&format=png&color=000000" },
      { name: "ASP.NET", image: "https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000" },
      { name: "Java", image: "https://img.icons8.com/?size=100&id=5OD485koNIrb&format=png&color=000000" },
      { name: "Python", image: "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" },
      { name: "C#", image: "https://img.icons8.com/?size=100&id=45490&format=png&color=000000" }
    ],
    database: [
      { name: "SqlServer", image: "https://img.icons8.com/?size=100&id=Jip1brulmaRZ&format=png&color=000000" },
      { name: "PostgreSQL", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png" },
      { name: "MySql", image: "https://img.icons8.com/?size=100&id=vR6XrZzQr1CN&format=png&color=000000" },
    ],
    methodologies: [
      { name: "GitLab", image: "https://img.icons8.com/?size=100&id=epZz7YMDqqwA&format=png&color=000000" },
      { name: "Git", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" },
      { name: "Docker", image: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" }
    ]
  };

  const SkillSection = ({ title, skills, delay }) => {
    return (
      <div 
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay={delay}
        className="bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-xl font-bold text-amber-500 mb-4 text-center border-b-2 border-amber-500 pb-2">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay={index * 100}
              className="flex flex-col items-center p-3 bg-gray-700 rounded-md hover:bg-amber-500 transition-colors duration-300 group"
            >
              <img
                className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                src={skill.image}
                alt={skill.name}
              />
              <span className="text-white text-sm font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      name='skills'
      className='w-full min-h-screen bg-[#262626] py-12 px-4'
    >
    <div className="max-w-6xl mx-auto text-center">
  <h1 
    data-aos="fade-left"
    data-aos-duration="500"
    className="text-4xl text-white font-bold mb-12 pb-3 inline-block border-b-4 border-amber-500"
  >
    Compétences
  </h1>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
    <SkillSection 
      title="Frontend" 
      skills={skillsData.frontend} 
      delay="100"
    />
    <SkillSection 
      title="Backend" 
      skills={skillsData.backend} 
      delay="200"
    />
    <SkillSection 
      title="Base de Données" 
      skills={skillsData.database} 
      delay="300"
    />
    <SkillSection 
      title="Méthodologies et outils" 
      skills={skillsData.methodologies} 
      delay="400"
    />
  </div>
</div>
</div>
  );
}