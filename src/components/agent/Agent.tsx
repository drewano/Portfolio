import React, { useState, useEffect } from 'react';
import { Stream, type Message } from './Stream';
import { Input } from './Input';
import { WelcomeBlock } from './blocks/WelcomeBlock';
import { ProjectsBlock } from './blocks/ProjectsBlock';
import { ExperienceBlock } from './blocks/ExperienceBlock';
import { ContactBlock } from './blocks/ContactBlock';
import { HelpBlock } from './blocks/HelpBlock';

export const Agent = () => {
    const [history, setHistory] = useState<Message[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [bootStep, setBootStep] = useState(0);

    // Boot Sequence
    useEffect(() => {
        const bootSequence = async () => {
            // Step 1: Initialize
            await new Promise(r => setTimeout(r, 800));
            setBootStep(1);

            // Step 2: Show Welcome
            await new Promise(r => setTimeout(r, 800));
            setHistory([{
                id: 'welcome',
                type: 'agent',
                content: <WelcomeBlock />
            }]);
            setBootStep(2);
        };
        bootSequence();
    }, []);

    const handleCommand = async (cmd: string) => {
        // Add User Message
        const userMsgId = Date.now().toString();
        setHistory(prev => [...prev, {
            id: userMsgId,
            type: 'user',
            content: cmd
        }]);

        setIsProcessing(true);

        // Simulate Agent "Thinking"
        await new Promise(r => setTimeout(r, 600 + Math.random() * 400));

        // Process Command
        const lowerCmd = cmd.toLowerCase();
        let responseContent: React.ReactNode;

        if (lowerCmd.includes('project') || lowerCmd.includes('work') || lowerCmd.includes('portfolio')) {
            responseContent = <ProjectsBlock />;
        } else if (lowerCmd.includes('experience') || lowerCmd.includes('career') || lowerCmd.includes('job') || lowerCmd.includes('resume')) {
            responseContent = <ExperienceBlock />;
        } else if (lowerCmd.includes('contact') || lowerCmd.includes('email') || lowerCmd.includes('social') || lowerCmd.includes('reach')) {
            responseContent = <ContactBlock />;
        } else if (lowerCmd.includes('help') || lowerCmd.includes('start') || lowerCmd.includes('menu')) {
            responseContent = <HelpBlock onCommand={handleCommand} />;
        } else if (lowerCmd.includes('bio') || lowerCmd.includes('about') || lowerCmd.includes('who')) {
            responseContent = <WelcomeBlock />;
        } else if (lowerCmd.includes('clear')) {
            setHistory([{
                id: 'welcome-restore',
                type: 'agent',
                content: <WelcomeBlock />
            }]);
            setIsProcessing(false);
            return;
        } else {
            responseContent = (
                <div className="font-mono text-ide-fg">
                    I didn't understand "{cmd}". <br/>
                    <span className="text-ide-muted text-sm mt-2 block">
                        Try asking for <span className="text-ide-accent cursor-pointer hover:underline" onClick={() => handleCommand('projects')}>projects</span>, <span className="text-ide-accent cursor-pointer hover:underline" onClick={() => handleCommand('experience')}>experience</span>, or type <span className="text-ide-accent cursor-pointer hover:underline" onClick={() => handleCommand('help')}>help</span>.
                    </span>
                </div>
            );
        }

        const agentMsgId = (Date.now() + 1).toString();
        setHistory(prev => [...prev, {
            id: agentMsgId,
            type: 'agent',
            content: responseContent
        }]);

        setIsProcessing(false);
    };

    if (bootStep === 0) {
        return (
            <div className="flex items-center justify-center h-full bg-ide-bg font-mono text-sm text-ide-muted">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-2 border-ide-border border-t-ide-accent rounded-full animate-spin" />
                    <div className="animate-pulse">Initializing Agent Interface...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-ide-bg relative overflow-hidden">
            {/* Background Noise/Grid (Optional) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[size:20px_20px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />

            {/* Main Stream */}
            <Stream history={history} isProcessing={isProcessing} />

            {/* Input Area */}
            <Input onCommand={handleCommand} isProcessing={isProcessing} />
        </div>
    );
};
