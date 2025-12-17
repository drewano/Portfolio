import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Editor } from './Editor';
import { Terminal } from './Terminal';

export const IDE = () => {
  const [activeFile, setActiveFile] = useState('README.md');
  const [openFiles, setOpenFiles] = useState(['README.md']);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);

  const handleFileSelect = (file: string) => {
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
    setLogs(prev => [...prev, `Opening ${file}...`]);
  };

  const closeFile = (e: React.MouseEvent, file: string) => {
    e.stopPropagation();
    const newOpenFiles = openFiles.filter(f => f !== file);
    setOpenFiles(newOpenFiles);
    if (activeFile === file && newOpenFiles.length > 0) {
      setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
    } else if (newOpenFiles.length === 0) {
      setActiveFile('');
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-ide-bg text-ide-fg overflow-hidden font-mono text-sm">
      {/* Header / Status Bar */}
      <header className="h-10 bg-ide-bg border-b border-ide-border flex items-center justify-between px-4 select-none z-20">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 group">
            <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-colors" />
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-1 rounded hover:bg-ide-border transition-colors ${isSidebarOpen ? 'text-ide-fg' : 'text-ide-muted'}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>
          <span className="text-ide-muted text-xs hidden md:inline-block">andrew-assef-portfolio</span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2 px-3 py-1 bg-ide-border/30 rounded-full border border-ide-border/50">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-ide-muted">Connected to Main</span>
          </div>
          <span className="text-ide-muted hidden md:inline-block">TypeScript React</span>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          activeFile={activeFile}
          onSelectFile={handleFileSelect}
          isOpen={isSidebarOpen}
        />

        {/* Editor Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-ide-bg">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-ide-border bg-ide-bg scrollbar-hide">
            {openFiles.map(file => (
              <div
                key={file}
                onClick={() => setActiveFile(file)}
                className={`
                  flex items-center gap-2 px-4 py-2 text-xs border-r border-ide-border cursor-pointer min-w-fit transition-colors
                  ${activeFile === file ? 'bg-ide-bg text-ide-accent border-t-2 border-t-ide-accent' : 'bg-ide-bg/50 text-ide-muted hover:bg-ide-border/20 border-t-2 border-t-transparent'}
                `}
              >
                <span>{file.split('/').pop()}</span>
                <button
                  onClick={(e) => closeFile(e, file)}
                  className="hover:bg-ide-border/50 rounded p-0.5 ml-1"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-hidden relative">
            {activeFile ? (
               <Editor activeFile={activeFile} />
            ) : (
                <div className="flex items-center justify-center h-full text-ide-muted flex-col gap-4">
                    <div className="w-16 h-16 rounded-full bg-ide-border/30 flex items-center justify-center text-2xl">⌨️</div>
                    <p>Select a file to start editing</p>
                    <div className="flex gap-2 text-xs opacity-50">
                        <span className="bg-ide-border/30 px-2 py-1 rounded">⌘ P</span>
                        <span>to search files</span>
                    </div>
                </div>
            )}

            {/* Terminal Overlay/Bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <Terminal
                    logs={logs}
                    isOpen={isTerminalOpen}
                    onToggle={() => setIsTerminalOpen(!isTerminalOpen)}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
