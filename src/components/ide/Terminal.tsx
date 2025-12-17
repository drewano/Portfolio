import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  logs?: string[];
  isOpen: boolean;
  onToggle: () => void;
}

export const Terminal: React.FC<TerminalProps> = ({ logs = [], isOpen, onToggle }) => {
  const [internalLogs, setInternalLogs] = useState<string[]>([
    'Initializing portfolio environment...',
    'Loading modules...',
    'Done in 345ms.',
    'Type "help" for available commands.'
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logs.length > 0) {
      setInternalLogs(prev => [...prev, ...logs]);
    }
  }, [logs]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [internalLogs, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    setInternalLogs(prev => [...prev, `> ${cmd}`]);

    // Simple command handling
    switch (cmd.toLowerCase()) {
      case 'help':
        setInternalLogs(prev => [...prev, 'Available commands: help, clear, whoami, date, ls']);
        break;
      case 'clear':
        setInternalLogs([]);
        break;
      case 'whoami':
        setInternalLogs(prev => [...prev, 'visitor@portfolio']);
        break;
      case 'date':
        setInternalLogs(prev => [...prev, new Date().toLocaleString()]);
        break;
      case 'ls':
        setInternalLogs(prev => [...prev, 'README.md  src/  .env  package.json']);
        break;
      default:
        setInternalLogs(prev => [...prev, `command not found: ${cmd}`]);
    }

    setInput('');
  };

  if (!isOpen) {
    return (
        <div
            onClick={onToggle}
            className="h-8 bg-ide-bg border-t border-ide-border flex items-center px-4 cursor-pointer hover:bg-ide-border/30 transition-colors"
        >
            <span className="text-xs text-ide-muted">TERMINAL</span>
        </div>
    );
  }

  return (
    <motion.div
        initial={{ height: 0 }}
        animate={{ height: 200 }}
        className="bg-ide-bg border-t border-ide-border flex flex-col font-mono text-sm"
    >
        <div className="flex items-center justify-between px-4 py-1 bg-ide-border/20 border-b border-ide-border select-none">
            <span className="text-xs text-ide-muted">TERMINAL</span>
            <button onClick={onToggle} className="text-ide-muted hover:text-ide-fg">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {internalLogs.map((log, i) => (
                <div key={i} className="text-ide-muted">
                    {log.startsWith('>') ? (
                        <span className="text-ide-fg">{log}</span>
                    ) : (
                        <span>{log}</span>
                    )}
                </div>
            ))}
            <form onSubmit={handleCommand} className="flex items-center gap-2">
                <span className="text-ide-accent">➜</span>
                <span className="text-cyan-400">~</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-ide-fg"
                    autoFocus
                />
            </form>
            <div ref={bottomRef} />
        </div>
    </motion.div>
  );
};
