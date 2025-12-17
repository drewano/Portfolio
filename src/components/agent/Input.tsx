import React, { useState, useRef, useEffect } from 'react';

interface InputProps {
    onCommand: (cmd: string) => void;
    isProcessing: boolean;
}

const SUGGESTIONS = [
    { label: 'Projects', cmd: 'projects' },
    { label: 'Experience', cmd: 'experience' },
    { label: 'Contact', cmd: 'contact' },
    { label: 'Bio', cmd: 'bio' },
    { label: 'Help', cmd: 'help' },
];

export const Input: React.FC<InputProps> = ({ onCommand, isProcessing }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isProcessing) {
            inputRef.current?.focus();
        }
    }, [isProcessing]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim() && !isProcessing) {
            onCommand(value.trim());
            setValue('');
        }
    };

    return (
        <div className="border-t border-ide-border bg-ide-bg p-4 pb-6 md:pb-8 relative z-20">
            <div className="max-w-3xl mx-auto space-y-4">
                {/* Chips */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {SUGGESTIONS.map((s) => (
                        <button
                            key={s.cmd}
                            onClick={() => onCommand(s.cmd)}
                            disabled={isProcessing}
                            className="px-3 py-1 text-xs font-mono border border-ide-border rounded-full hover:border-ide-accent hover:text-ide-accent hover:bg-ide-accent/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-ide-muted"
                        >
                            {s.label}
                        </button>
                    ))}
                </div>

                {/* Input Field */}
                <form onSubmit={handleSubmit} className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className={`font-mono text-lg transition-colors ${isProcessing ? 'text-ide-muted' : 'text-ide-accent'}`}>
                            {isProcessing ? '●' : '❯'}
                        </span>
                    </div>
                    <input
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={isProcessing ? "Agent is working..." : "Ask anything... (e.g., 'Show me your projects')"}
                        disabled={isProcessing}
                        className="w-full bg-ide-border/10 border border-ide-border rounded-lg py-3 pl-10 pr-4 font-mono text-ide-fg placeholder:text-ide-muted/50 focus:outline-none focus:border-ide-accent/50 focus:bg-ide-border/20 transition-all disabled:opacity-50"
                        autoFocus
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-[10px] text-ide-muted font-mono border border-ide-border/50 px-1.5 rounded">
                            ⏎
                        </span>
                    </div>
                </form>

                <div className="text-center md:text-left text-[10px] text-ide-muted font-mono opacity-50">
                    Powered by Andrew Assef v2.0 • Type 'help' for commands
                </div>
            </div>
        </div>
    );
};
