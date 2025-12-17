import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  activeFile: string;
  onSelectFile: (file: string) => void;
  isOpen: boolean;
}

const FileItem = ({
  name,
  icon,
  isActive,
  onClick,
  indent = 0
}: {
  name: string;
  path: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
  indent?: number;
}) => (
  <motion.div
    whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
    onClick={onClick}
    className={`
      flex items-center gap-2 py-1 px-4 cursor-pointer text-sm select-none
      ${isActive ? 'bg-ide-accent/10 text-ide-accent border-l-2 border-ide-accent' : 'text-ide-muted hover:text-ide-fg border-l-2 border-transparent'}
    `}
    style={{ paddingLeft: `${indent * 12 + 16}px` }}
  >
    <span className="opacity-80 w-4 text-center">{icon}</span>
    <span>{name}</span>
  </motion.div>
);

const FolderItem = ({ name, children, indent = 0 }: { name: string; children: React.ReactNode; indent?: number }) => (
  <div>
    <div
      className="flex items-center gap-2 py-1 px-4 text-sm font-semibold text-ide-fg opacity-60 select-none"
      style={{ paddingLeft: `${indent * 12 + 16}px` }}
    >
      <span className="w-4 text-center">📂</span>
      <span>{name}</span>
    </div>
    <div>{children}</div>
  </div>
);

export const Sidebar: React.FC<SidebarProps> = ({ activeFile, onSelectFile, isOpen }) => {
  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <motion.aside
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -250, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-64 h-full bg-ide-bg border-r border-ide-border flex flex-col pt-4 overflow-y-auto"
        >
          <div className="px-4 mb-4 text-xs font-bold tracking-widest text-ide-muted uppercase">Explorer</div>

          <div className="flex flex-col gap-0.5">
            <FileItem
              name="README.md"
              path="README.md"
              icon="📝"
              isActive={activeFile === 'README.md'}
              onClick={() => onSelectFile('README.md')}
            />

            <FolderItem name="src">
              <FileItem
                name="projects.tsx"
                path="src/projects.tsx"
                icon="⚛️"
                isActive={activeFile === 'src/projects.tsx'}
                onClick={() => onSelectFile('src/projects.tsx')}
                indent={1}
              />
              <FileItem
                name="experiences.tsx"
                path="src/experiences.tsx"
                icon="💼"
                isActive={activeFile === 'src/experiences.tsx'}
                onClick={() => onSelectFile('src/experiences.tsx')}
                indent={1}
              />
            </FolderItem>

            <FileItem
              name=".env"
              path=".env"
              icon="🔒"
              isActive={activeFile === '.env'}
              onClick={() => onSelectFile('.env')}
            />

            <FileItem
              name="package.json"
              path="package.json"
              icon="📦"
              isActive={activeFile === 'package.json'}
              onClick={() => onSelectFile('package.json')}
            />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
