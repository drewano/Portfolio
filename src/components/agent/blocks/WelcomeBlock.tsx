import React from 'react';
import { profile } from '../../../data/portfolio';

export const WelcomeBlock = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="flex items-center gap-4">
      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-16 h-16 rounded-full border border-ide-accent/50 object-cover"
      />
      <div>
        <h1 className="text-xl font-bold font-mono text-ide-fg">
          {profile.name}
        </h1>
        <div className="text-ide-accent font-mono text-sm">
          {profile.role}
        </div>
      </div>
    </div>

    <div className="prose prose-invert prose-sm max-w-none text-ide-fg/90 font-mono leading-relaxed border-l-2 border-ide-border pl-4">
      <p>{profile.bio}</p>
      <p className="text-ide-muted">{profile.secondaryRole}</p>
    </div>

    <div className="flex gap-3 text-xs font-mono text-ide-muted">
      <span>📍 Paris, France</span>
      <span>•</span>
      <span className="text-green-500">● Available for work</span>
    </div>
  </div>
);
