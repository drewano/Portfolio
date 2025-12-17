import React from 'react';

export const HelpBlock = ({ onCommand }: { onCommand: (cmd: string) => void }) => (
    <div className="font-mono text-sm">
        <p className="text-ide-muted mb-4">I can help you explore this portfolio. Try these commands:</p>
        <div className="grid gap-2">
            {[
                { cmd: 'projects', desc: 'View my work and open source contributions' },
                { cmd: 'experience', desc: 'See my career history' },
                { cmd: 'contact', desc: 'Get in touch' },
                { cmd: 'bio', desc: 'About me' },
                { cmd: 'clear', desc: 'Clear the session history' },
            ].map(({ cmd, desc }) => (
                <button
                    key={cmd}
                    onClick={() => onCommand(cmd)}
                    className="flex items-center gap-4 text-left group hover:bg-ide-border/10 p-2 -mx-2 rounded transition-colors"
                >
                    <span className="text-ide-accent min-w-[100px] font-bold">/ {cmd}</span>
                    <span className="text-ide-muted group-hover:text-ide-fg transition-colors">{desc}</span>
                </button>
            ))}
        </div>
    </div>
);
