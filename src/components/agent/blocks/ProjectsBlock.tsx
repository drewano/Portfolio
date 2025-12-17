import React from 'react';
import { projects } from '../../../data/portfolio';

export const ProjectsBlock = () => (
  <div className="space-y-2">
    <div className="text-xs text-ide-muted mb-2 font-mono uppercase tracking-widest">Loaded {projects.length} modules</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
        <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-ide-bg border border-ide-border hover:border-ide-accent transition-colors group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ide-accent">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
            </div>
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-ide-fg group-hover:text-ide-accent font-mono">{project.title}</h3>
            </div>
            <p className="text-sm text-ide-muted mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-1.5 py-0.5 border border-ide-border/50 rounded text-ide-muted/80">#{tag}</span>
                ))}
            </div>
        </a>
        ))}
    </div>
  </div>
);
