import React from 'react';
import { profile } from '../../../data/portfolio';

export const ContactBlock = () => (
    <div className="space-y-4">
        <p className="text-ide-muted text-sm font-mono">You can reach me through these communication channels:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(profile.social).map(([platform, link]) => (
                <a
                    key={platform}
                    href={link.startsWith('http') ? link : `mailto:${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-ide-bg border border-ide-border hover:border-ide-accent hover:bg-ide-accent/5 transition-all group"
                >
                    <div className="flex-1 min-w-0">
                        <div className="text-xs text-ide-muted uppercase tracking-wider mb-1 font-mono group-hover:text-ide-accent">{platform}</div>
                        <div className="text-sm text-ide-fg font-mono truncate">{link.replace('https://', '').replace('mailto:', '')}</div>
                    </div>
                    <div className="text-ide-border group-hover:text-ide-accent transition-colors">
                        ↗
                    </div>
                </a>
            ))}
        </div>
    </div>
);
