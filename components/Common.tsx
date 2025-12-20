import React from 'react';

export const Icon = ({ name, className = "" }: { name: string; className?: string }) => (
  <span className={`material-symbols-outlined select-none ${className}`}>
    {name}
  </span>
);

export const TerminalWindow = ({ 
  children, 
  title = "terminal", 
  className = "",
  showControls = true 
}: { 
  children: React.ReactNode; 
  title?: string; 
  className?: string;
  showControls?: boolean;
}) => {
  return (
    <div className={`overflow-hidden rounded-xl bg-[#1e1e1e] border border-slate-700 shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 border-b border-slate-700 bg-[#2d2d2d] px-4 py-3">
        {showControls && (
          <div className="flex gap-2 mr-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        )}
        <div className="font-mono text-xs text-slate-400 select-none flex-grow text-center md:text-left">{title}</div>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed text-slate-300 overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export const CodeKeyword = ({ children }: { children: React.ReactNode }) => <span className="text-purple-400">{children}</span>;
export const CodeString = ({ children }: { children: React.ReactNode }) => <span className="text-green-400">{children}</span>;
export const CodeClass = ({ children }: { children: React.ReactNode }) => <span className="text-yellow-300">{children}</span>;
export const CodeFunction = ({ children }: { children: React.ReactNode }) => <span className="text-blue-400">{children}</span>;
export const CodeComment = ({ children }: { children: React.ReactNode }) => <span className="text-slate-500 italic">{children}</span>;
export const CodeVariable = ({ children }: { children: React.ReactNode }) => <span className="text-red-400">{children}</span>;

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="flex flex-col gap-2 mb-10">
     {subtitle && <p className="text-primary text-sm font-mono tracking-wider mb-1">{subtitle}</p>}
    <div className="flex items-baseline gap-2">
      <h1 className="text-white text-4xl md:text-5xl font-bold font-mono tracking-tight">
        <span className="text-primary mr-2">{'>'}</span>{title}<span className="animate-blink">_</span>
      </h1>
    </div>
  </div>
);