import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Message {
    id: string;
    type: 'user' | 'agent';
    content: React.ReactNode;
}

interface StreamProps {
    history: Message[];
    isProcessing: boolean;
}

const UserMessage = ({ content }: { content: React.ReactNode }) => (
    <div className="flex justify-end mb-6">
        <div className="bg-ide-border/20 border border-ide-border/50 text-ide-fg px-4 py-2 rounded-lg rounded-tr-sm font-mono text-sm max-w-[80%]">
            {content}
        </div>
    </div>
);

const AgentMessage = ({ content }: { content: React.ReactNode }) => (
    <div className="flex gap-4 mb-8">
        <div className="w-8 h-8 rounded-full bg-ide-accent/10 border border-ide-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-ide-accent text-xs">AI</span>
        </div>
        <div className="flex-1 min-w-0 overflow-hidden">
            {content}
        </div>
    </div>
);

export const Stream: React.FC<StreamProps> = ({ history, isProcessing }) => {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to bottom when history changes
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history, isProcessing]);

    return (
        <div className="flex-1 overflow-y-auto px-4 py-6 scroll-smooth custom-scrollbar">
            <div className="max-w-3xl mx-auto min-h-full flex flex-col justify-end">
                {/* Spacer for top content */}
                <div className="flex-1" />

                <AnimatePresence mode='popLayout'>
                    {history.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            layout
                        >
                            {msg.type === 'user' ? (
                                <UserMessage content={msg.content} />
                            ) : (
                                <AgentMessage content={msg.content} />
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isProcessing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-4 mb-4"
                    >
                        <div className="w-8 h-8 flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-ide-border border-t-ide-accent rounded-full animate-spin" />
                        </div>
                        <div className="flex items-center">
                            <span className="text-ide-muted text-sm font-mono animate-pulse">Thinking...</span>
                        </div>
                    </motion.div>
                )}

                <div ref={bottomRef} className="h-4" />
            </div>
        </div>
    );
};
