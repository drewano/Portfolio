import React from 'react';
import { motion } from 'framer-motion';
import { projects, experiences, profile, technologies } from '../../data/portfolio';

interface EditorProps {
  activeFile: string;
}

const ReadmeView = () => (
  <div className="max-w-3xl mx-auto p-8 prose prose-invert prose-p:text-ide-fg/80 prose-headings:text-ide-fg font-sans">
    <h1 className="text-4xl font-bold mb-4 font-mono">Hi, I'm {profile.name} 👋</h1>
    <div className="flex items-center gap-4 mb-8">
      <img src={profile.avatar} alt={profile.name} className="w-20 h-20 rounded-full border-2 border-ide-accent object-cover" />
      <div>
        <h2 className="text-xl text-ide-accent m-0 font-mono">{profile.role}</h2>
        <a href={profile.companyLink} target="_blank" className="text-ide-muted hover:text-ide-fg no-underline font-mono">@ {profile.company}</a>
      </div>
    </div>

    <p className="text-lg leading-relaxed">{profile.bio}</p>
    <p className="text-ide-muted">{profile.secondaryRole}</p>

    <div className="mt-8">
      <h3 className="font-mono text-lg mb-4 text-ide-accent">Connect</h3>
      <div className="flex gap-4 font-mono text-sm">
        {Object.entries(profile.social).map(([platform, link]) => (
          <a
            key={platform}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-ide-border/50 border border-ide-border rounded hover:border-ide-accent hover:text-ide-accent transition-colors no-underline"
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsView = () => (
  <div className="p-8">
    <div className="font-mono text-sm text-ide-muted mb-6">
      <span className="text-purple-400">export</span> <span className="text-blue-400">const</span> <span className="text-yellow-400">Projects</span> = () <span className="text-purple-400">=&gt;</span> (
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-ide-border/20 border border-ide-border rounded hover:border-ide-accent/50 transition-all hover:-translate-y-1"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-ide-fg group-hover:text-ide-accent font-mono">{project.title}</h3>
            <span className="text-xs border border-ide-border px-2 py-1 rounded text-ide-muted bg-ide-bg">{project.tech}</span>
          </div>
          <p className="text-ide-muted mb-4 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs text-blue-400">#{tag}</span>
            ))}
          </div>
        </a>
      ))}
    </div>

    <div className="font-mono text-sm text-ide-muted mt-6">);</div>
  </div>
);

const ExperienceView = () => (
  <div className="p-8 max-w-4xl">
    <div className="font-mono text-sm text-ide-muted mb-6">
        <span className="text-purple-400">import</span> {'{ Experience }'} <span className="text-purple-400">from</span> <span className="text-green-400">'./life'</span>;
    </div>

    <div className="space-y-8 pl-4 border-l border-ide-border ml-2">
      {experiences.map((exp, i) => (
        <div key={i} className="relative pl-8">
          <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${exp.current ? 'bg-ide-accent animate-pulse' : 'bg-ide-border'}`} />
          <h3 className="text-lg font-bold text-ide-fg font-mono">{exp.title}</h3>
          <div className="flex items-center gap-2 text-sm mb-2 font-mono">
            <span className="text-ide-accent">{exp.company}</span>
            <span className="text-ide-muted">•</span>
            <span className="text-ide-muted">{exp.period}</span>
          </div>
          <p className="text-ide-muted/80 leading-relaxed">{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const EnvView = () => (
  <div className="p-8 font-mono">
    <div className="space-y-2 text-ide-fg/80">
      <div className="flex gap-4">
        <span className="text-blue-400">CONTACT_EMAIL</span>
        <span className="text-ide-muted">=</span>
        <span className="text-green-400">"{profile.social.email}"</span>
      </div>
      <div className="flex gap-4">
        <span className="text-blue-400">LINKEDIN_URL</span>
        <span className="text-ide-muted">=</span>
        <span className="text-green-400">"{profile.social.linkedin}"</span>
      </div>
      <div className="flex gap-4">
        <span className="text-blue-400">GITHUB_URL</span>
        <span className="text-ide-muted">=</span>
        <span className="text-green-400">"{profile.social.github}"</span>
      </div>
      <div className="flex gap-4">
        <span className="text-blue-400">AVAILABILITY</span>
        <span className="text-ide-muted">=</span>
        <span className="text-green-400">"Open for interesting projects"</span>
      </div>
      <div className="mt-8 text-ide-muted">
        # Send a message via terminal:
        <br />
        # {'>'} mail {profile.social.email}
      </div>
    </div>
  </div>
);

const PackageJsonView = () => (
    <div className="p-8 font-mono">
        <pre className="text-sm text-ide-fg/80">
            {JSON.stringify({
                name: "andrew-assef-portfolio",
                version: "2.0.0",
                description: "AI & Data Engineer Portfolio",
                author: profile.name,
                dependencies: {
                    ...technologies.reduce((acc, tech) => ({...acc, [tech.toLowerCase()]: "latest"}), {})
                }
            }, null, 2)}
        </pre>
    </div>
);

export const Editor: React.FC<EditorProps> = ({ activeFile }) => {
  return (
    <div className="flex-1 h-full overflow-y-auto bg-ide-bg custom-scrollbar relative">
        <motion.div
            key={activeFile}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="min-h-full"
        >
            {activeFile === 'README.md' && <ReadmeView />}
            {activeFile === 'src/projects.tsx' && <ProjectsView />}
            {activeFile === 'src/experiences.tsx' && <ExperienceView />}
            {activeFile === '.env' && <EnvView />}
            {activeFile === 'package.json' && <PackageJsonView />}
        </motion.div>
    </div>
  );
};
