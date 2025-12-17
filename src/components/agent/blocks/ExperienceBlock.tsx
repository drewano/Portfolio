import React from 'react';
import { experiences } from '../../../data/portfolio';

export const ExperienceBlock = () => (
    <div className="space-y-8 relative">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-ide-border"></div>
        {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 group">
                <div className={`absolute left-0 top-2 w-2.5 h-2.5 rounded-full border-2 border-ide-bg transition-colors ${exp.current ? 'bg-ide-accent animate-pulse' : 'bg-ide-border group-hover:bg-ide-fg'}`} />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="font-bold text-ide-fg font-mono text-lg">{exp.title}</h3>
                    <span className="text-xs text-ide-muted font-mono">{exp.period}</span>
                </div>
                <div className="text-sm text-ide-accent mb-2 font-mono">{exp.company}</div>
                <p className="text-sm text-ide-muted/90 leading-relaxed">{exp.description}</p>
            </div>
        ))}
    </div>
);
