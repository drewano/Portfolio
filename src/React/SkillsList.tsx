import { useState } from "react";

const CategoryIcons = {
  "Intelligence Artificielle": (
    <svg
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 463 463"
    >
      <path d="M207.5,127c4.143,0,7.5-3.358,7.5-7.5v-8c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v8
		C200,123.642,203.357,127,207.5,127z"/>
	<path d="M255.5,127c4.143,0,7.5-3.358,7.5-7.5v-8c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v8
		C248,123.642,251.357,127,255.5,127z"/>
	<path d="M386.854,312.792L375,306.865v-69.099c9.29-3.138,16-11.93,16-22.266c0-12.958-10.542-23.5-23.5-23.5H335v-8.5
		c0-4.142-3.357-7.5-7.5-7.5H311v-40.5c0-26.05-12.595-49.213-32.014-63.721C278.989,71.686,279,71.594,279,71.5V45.766
		c9.29-3.138,16-11.93,16-22.266C295,10.542,284.458,0,271.5,0S248,10.542,248,23.5c0,10.336,6.71,19.128,16,22.266v17.209
		C254.07,58.507,243.076,56,231.5,56s-22.57,2.507-32.5,6.975V45.766c9.29-3.138,16-11.93,16-22.266C215,10.542,204.458,0,191.5,0
		S168,10.542,168,23.5c0,10.336,6.71,19.128,16,22.266V71.5c0,0.094,0.011,0.186,0.014,0.279C164.595,86.287,152,109.45,152,135.5
		V176h-16.5c-4.143,0-7.5,3.358-7.5,7.5v8.5H95.5C82.542,192,72,202.542,72,215.5c0,10.336,6.71,19.128,16,22.266v69.099
		l-11.854,5.927c-2.54,1.27-4.146,3.867-4.146,6.708v24c0,2.841,1.605,5.438,4.146,6.708l16,8c1.077,0.539,2.222,0.793,3.349,0.793
		c2.751,0,5.4-1.52,6.714-4.147c1.853-3.705,0.351-8.21-3.354-10.062L87,338.865v-14.729l8.5-4.25l8.5,4.25V335.5
		c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-2.841-1.605-5.438-4.146-6.708L103,306.865V239h25v32.5
		c0,26.05,12.595,49.213,32.014,63.721c-0.003,0.093-0.014,0.185-0.014,0.279v48c0,10.336,6.71,19.128,16,22.266V416h-16.5
		c-2.807,0-5.378,1.566-6.665,4.06L138.415,448H135.5c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h72c4.143,0,7.5-3.358,7.5-7.5
		v-32c0-4.142-3.357-7.5-7.5-7.5H191v-10.234c9.29-3.138,16-11.93,16-22.266v-32.513c0.167,0.001,0.332,0.013,0.5,0.013h48
		c0.168,0,0.333-0.012,0.5-0.013V383.5c0,10.336,6.71,19.128,16,22.266V416h-16.5c-4.143,0-7.5,3.358-7.5,7.5v32
		c0,4.142,3.357,7.5,7.5,7.5h72c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-2.915l-14.42-27.94
		c-1.287-2.494-3.858-4.06-6.665-4.06H287v-10.234c9.29-3.138,16-11.93,16-22.266v-48c0-0.094-0.011-0.186-0.014-0.279
		C322.405,320.713,335,297.55,335,271.5V239h25v67.865l-11.854,5.927c-2.54,1.27-4.146,3.867-4.146,6.708v16
		c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-11.365l8.5-4.25l8.5,4.25v14.729l-11.854,5.927
		c-3.704,1.852-5.206,6.357-3.354,10.062c1.313,2.628,3.963,4.148,6.714,4.147c1.127,0,2.271-0.255,3.349-0.793l16-8
		c2.54-1.27,4.146-3.867,4.146-6.708v-24C391,316.659,389.395,314.062,386.854,312.792z M271.5,15c4.687,0,8.5,3.813,8.5,8.5
		s-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5S266.813,15,271.5,15z M191.5,15c4.687,0,8.5,3.813,8.5,8.5s-3.813,8.5-8.5,8.5
		s-8.5-3.813-8.5-8.5S186.813,15,191.5,15z M200,448h-44.705l8.774-17H200V448z M307.705,448H263v-17h35.931L307.705,448z
		 M367.5,224c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5S372.187,224,367.5,224z M231.5,71
		c35.565,0,64.5,28.935,64.5,64.5v8.5H167v-8.5C167,99.935,195.935,71,231.5,71z M167,159h129v17H167V159z M95.5,207
		c4.687,0,8.5,3.813,8.5,8.5s-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5S90.813,207,95.5,207z M117.403,224
		c1.027-2.638,1.597-5.503,1.597-8.5s-0.57-5.862-1.597-8.5H128v17H117.403z M183.5,392c-4.687,0-8.5-3.813-8.5-8.5
		s3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5S188.187,392,183.5,392z M192,361.597c-2.638-1.027-5.503-1.597-8.5-1.597
		s-5.862,0.57-8.5,1.597v-17.572c5.38,2.421,11.069,4.27,17,5.447V361.597z M143,271.5V191h81v25h-24.5
		c-17.369,0-31.5,14.131-31.5,31.5s14.131,31.5,31.5,31.5H224v57h-16.5C171.935,336,143,307.065,143,271.5z M199.5,264
		c-9.098,0-16.5-7.402-16.5-16.5s7.402-16.5,16.5-16.5h64c9.098,0,16.5,7.402,16.5,16.5s-7.402,16.5-16.5,16.5H199.5z M279.5,392
		c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5S284.187,392,279.5,392z M288,361.597
		c-2.638-1.027-5.503-1.597-8.5-1.597s-5.862,0.57-8.5,1.597v-12.125c5.931-1.177,11.62-3.026,17-5.447V361.597z M320,271.5
		c0,35.565-28.935,64.5-64.5,64.5H239v-57h24.5c17.369,0,31.5-14.131,31.5-31.5S280.869,216,263.5,216H239v-25h81V271.5z M335,207
		h10.597c-1.027,2.638-1.597,5.503-1.597,8.5s0.57,5.862,1.597,8.5H335V207z"/>
    </svg>
  ),
  "Développement & Tech": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
    </svg>
  ),
  "Gestion de Projets": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.4142L8.29289 15.1213L6.87868 13.7071L13 7.58579L16 10.5858L20.2929 6.29289Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Intelligence Artificielle": [
      "LLMs (Large Language Models)",
      "Retrieval-Augmented Generation (RAG)",
      "IA générative",
      "Fine-tuning de modèles IA",
      "Langchain & OpenAI SDK",
      "Agent IA"
    ],
    "Développement & Tech": [
      "Développement web, mobile et logicielle",
      "Python, Java, PHP, Javascript",
      "FLutter, React, Spring Boot",
      "Bash, Powershell, Git, Docker"
    ],
    "Gestion de Projets": [
      "Agile, Scrum, Kanban",
      "Gestion de projet",
      "Leadership",
      "Documentation technique"
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        Mes compétences
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
