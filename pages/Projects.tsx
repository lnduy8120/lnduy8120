import React, { useState } from 'react';
import { SectionTitle, Icon } from '../components/Common';
import { Project } from '../types';
import data from '../data';

const projectsData: Project[] = data.projects as Project[];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter || p.techStack.includes(filter));

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionTitle title="Projects Showcase" subtitle="// PROJECTS_DIR" />
      
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-end justify-between">
        <div className="w-full md:w-1/2 max-w-[480px]">
          <label className="block mb-2 text-sm font-mono text-gray-400">
            {'>'} filter --by technology...
          </label>
          <div className="flex w-full items-stretch rounded-lg shadow-sm">
            <input 
              type="text" 
              className="flex w-full min-w-0 flex-1 rounded-l-lg border border-zinc-700 bg-zinc-900 border-r-0 px-4 py-3 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary font-mono text-sm"
              placeholder="e.g. Spring Boot, Kafka"
              onChange={(e) => setFilter(e.target.value || 'All')}
            />
            <button className="flex items-center justify-center px-4 rounded-r-lg border border-zinc-700 border-l-0 bg-zinc-900 hover:bg-zinc-800 text-primary transition-colors">
              <Icon name="search" />
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-end">
          {['All', 'Spring Boot', 'Microservices', 'JavaFX', 'Cloud'].map(cat => (
             <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-md text-sm font-mono transition-all ${
                  filter === cat 
                    ? 'bg-primary text-black font-bold' 
                    : 'bg-zinc-800 text-gray-400 hover:border-primary/50 border border-transparent'
                }`}
             >
                [{cat}]
             </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((project) => (
           <div key={project.id} className="group relative flex flex-col md:flex-row bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-[0_0_15px_rgba(19,236,91,0.1)] transition-all duration-300">
              <div className="w-full md:w-[320px] h-64 md:h-auto shrink-0 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                 <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${project.imageUrl}')` }}></div>
              </div>
              <div className="flex flex-col p-6 flex-grow">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors font-mono tracking-tight">{project.title}</h3>
                    <Icon name="dns" className="text-zinc-700 group-hover:text-primary transition-colors" />
                 </div>
                 <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-[#09090b] border border-zinc-700 rounded text-xs text-primary font-mono">{tech}</span>
                    ))}
                 </div>
                 <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                 </p>
                 <div className="flex gap-3 mt-auto pt-4 border-t border-zinc-800">
                    <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 bg-primary text-black rounded font-bold text-sm hover:bg-white transition-colors">
                      <Icon name="terminal" className="text-[18px]" /> View Repo
                    </button>
                    {project.demoUrl && (
                      <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 bg-transparent border border-primary text-primary rounded font-bold text-sm hover:bg-primary/10 transition-colors">
                        <Icon name="open_in_new" className="text-[18px]" /> Live Demo
                      </button>
                    )}
                 </div>
              </div>
           </div>
        ))}
      </div>

      {/* Terminal Footer Visual */}
      <div className="mt-6 group flex flex-col md:flex-row bg-black border border-zinc-800 rounded-lg overflow-hidden">
         <div className="w-full p-4 font-mono text-sm md:text-base">
            <div className="flex items-center gap-2 mb-2 border-b border-zinc-800 pb-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-zinc-600 text-xs">run_server.sh</span>
            </div>
            <div className="text-gray-400">
              <span className="text-primary">user@server:~/chat-app$</span> java -jar chat-server.jar<br/>
              <span className="text-gray-500">[INFO]</span> Starting Netty Server on port 8080...<br/>
              <span className="text-gray-500">[INFO]</span> WebSocket Protocol Handler active.<br/>
              <span className="text-gray-500">[INFO]</span> Connected to Redis for session storage.<br/>
              <span className="text-white animate-pulse">_</span>
            </div>
         </div>
         <div className="w-full md:w-[350px] bg-zinc-900 p-6 flex flex-col justify-center border-t md:border-t-0 md:border-l border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-2 font-mono">Real-time Chat Engine</h3>
            <p className="text-gray-400 text-sm mb-4">High-performance WebSocket server built with Netty. Supports 10k+ concurrent connections with Redis Pub/Sub.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-0.5 bg-[#09090b] border border-zinc-700 rounded text-xs text-primary font-mono">Netty</span>
              <span className="px-2 py-0.5 bg-[#09090b] border border-zinc-700 rounded text-xs text-primary font-mono">Redis</span>
            </div>
            <button className="w-full py-2 bg-zinc-800 text-white hover:bg-primary hover:text-black rounded font-mono text-sm font-bold transition-colors">View Architecture</button>
         </div>
      </div>
    </div>
  );
};

export default Projects;