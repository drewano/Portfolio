export interface Project {
  title: string;
  description: string;
  link: string;
  tech: string;
  tags: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Profile {
  name: string;
  role: string;
  secondaryRole: string;
  company: string;
  companyLink: string;
  bio: string;
  avatar: string;
  social: {
    github: string;
    linkedin: string;
    huggingFace: string;
    email: string;
  };
}

export const projects: Project[] = [
  {
    title: "autoads",
    description: "Transform your website into AI-generated video ads that convert. Paste your URL, get a viral video in minutes.",
    link: "https://autoads.pro",
    tech: "Next.js, Python, AI",
    tags: ["Next.js", "Python", "AI", "Video Generation"]
  },
  {
    title: "dodai",
    description: "Open-source browser extension that brings local AI to every text field. Your own AI copilot that works everywhere you type.",
    link: "https://github.com/drewano/dodai",
    tech: "TypeScript, Ollama",
    tags: ["TypeScript", "Ollama", "Browser Extension", "Local AI"]
  },
  {
    title: "France-GPT",
    description: "Collection of AI agents using French government APIs to simplify administrative tasks and data access.",
    link: "https://github.com/drewano/France-GPT",
    tech: "Python, MCP",
    tags: ["Python", "MCP", "Agents", "Open Data"]
  },
  {
    title: "docasis-proto",
    description: "Complete RAG pipeline with Gemini for intelligent document analysis and querying.",
    link: "https://github.com/drewano/docasis-proto",
    tech: "Python, Qdrant, Gemini",
    tags: ["Python", "Qdrant", "Gemini", "RAG"]
  }
];

export const experiences: Experience[] = [
  {
    title: "AI & Data Project Engineer",
    company: "Renault Group",
    period: "Sept 2025 – Present",
    description: "Leading AI and data initiatives to optimize automotive processes and systems.",
    current: true
  },
  {
    title: "Co-founder",
    company: "autoads",
    period: "Oct 2025 – Present",
    description: "Building the future of automated video advertising using generative AI.",
    current: true
  },
  {
    title: "AI Developer",
    company: "AFPA",
    period: "Sept 2024 – Aug 2025",
    description: "Developed AI solutions and automated workflows for training administration.",
    current: false
  },
  {
    title: "IT Support Technician",
    company: "Careside",
    period: "Sept 2022 – Aug 2024",
    description: "Provided technical support and system maintenance for enterprise clients.",
    current: false
  }
];

export const education: Education[] = [
  {
    degree: "Engineering Degree in AI",
    school: "ESIEA",
    period: "2025 – 2028"
  },
  {
    degree: "Bachelor's in Computer Science",
    school: "CNAM Paris",
    period: "2024 – 2025"
  }
];

export const profile: Profile = {
  name: "Andrew Assef",
  role: "AI & Data Project Engineer",
  company: "Renault Group",
  companyLink: "https://www.renaultgroup.com",
  secondaryRole: "Building the future with autoads",
  bio: "I craft intelligent systems that bridge the gap between complex data and human experience.",
  avatar: "/images/profile-manga.jpeg",
  social: {
    github: "https://github.com/drewano",
    linkedin: "https://linkedin.com/in/andrew-assef/",
    huggingFace: "https://huggingface.co/drewano",
    email: "assef.andrew@gmail.com"
  }
};

export const technologies = [
  "React",
  "Node.js",
  "JavaScript",
  "Git",
  "MySQL",
  "Bash",
  "OpenAI SDK",
  "Python",
  "Java",
  "Azure",
  "n8n"
];
