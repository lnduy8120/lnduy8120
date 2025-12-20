import React from 'react';
import { SectionTitle, TerminalWindow, Icon, CodeKeyword } from '../components/Common';

const Skills = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 lg:px-12">
       <SectionTitle title="Skills & Technologies" />

       {/* Top Terminal */}
       <div className="mb-12 rounded-lg border border-[#23482f] bg-terminal-bg overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 border-b border-[#23482f] px-4 py-2 bg-[#152e1f]">
             <div className="h-3 w-3 rounded-full bg-red-500"></div>
             <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
             <div className="h-3 w-3 rounded-full bg-green-500"></div>
             <div className="ml-2 text-xs text-gray-400 font-mono">bash — 80x24</div>
          </div>
          <div className="p-6 font-mono text-sm md:text-base">
             <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-primary font-bold">user@portfolio:~/skills$</span>
                <span className="text-white animate-blink">ls -la --color=auto</span>
             </div>
             <div className="space-y-1 text-gray-300">
                <p>drwxr-xr-x  4 user  staff   128 Oct 24 10:00 <span className="text-[#6494ed] font-bold">.</span></p>
                <p>drwxr-xr-x  8 user  staff   256 Oct 24 09:45 <span className="text-[#6494ed] font-bold">..</span></p>
                <p>-rw-r--r--  1 user  staff  2048 Oct 24 10:01 <span className="text-primary">Languages.java</span></p>
                <p>-rw-r--r--  1 user  staff  4096 Oct 24 10:02 <span className="text-primary">Frameworks.json</span></p>
                <p>-rwxr-xr-x  1 user  staff  1024 Oct 24 10:03 <span className="text-[#e06c75]">deploy.sh</span></p>
             </div>
             <div className="mt-6 border-t border-dashed border-[#23482f] pt-4">
                <p className="text-[#92c9a4] italic">
                   // Specialized in building scalable, high-performance backend systems using the Java ecosystem.
                   <br/>
                   // Actively exploring reactive programming and cloud-native architectures.
                </p>
             </div>
          </div>
       </div>

       {/* Grid Layout */}
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-10">
             
             {/* Core Proficiency */}
             <section>
                <h3 className="flex items-center gap-2 text-white text-xl font-bold mb-6 font-mono">
                   <Icon name="memory" className="text-primary" /> Core_Proficiency
                </h3>
                <div className="space-y-6">
                   {[
                     { name: 'Java (Core & Advanced)', level: 95, desc: 'JVM Internals, Stream API, Concurrency, Reflection' },
                     { name: 'Spring Ecosystem', level: 90, desc: 'Boot, Security, Data JPA, Cloud, WebFlux' },
                     { name: 'Microservices & Architecture', level: 85, desc: 'Distributed Systems, Event-Driven, REST/gRPC' }
                   ].map(skill => (
                      <div key={skill.name} className="group rounded-xl bg-[#162c20] border border-[#23482f] p-5 hover:border-primary/50 transition-all hover:shadow-[0_0_10px_rgba(19,236,91,0.2)]">
                         <div className="flex justify-between items-end mb-2">
                            <span className="text-white font-bold text-lg">{skill.name}</span>
                            <span className="text-primary font-mono font-bold">{skill.level}%</span>
                         </div>
                         <div className="w-full h-2 bg-[#0a140d] rounded-full overflow-hidden mb-3">
                            <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                         </div>
                         <p className="text-sm text-gray-400 font-mono">{skill.desc}</p>
                      </div>
                   ))}
                </div>
             </section>

             {/* Persistence */}
             <section>
                <h3 className="flex items-center gap-2 text-white text-xl font-bold mb-6 font-mono">
                   <Icon name="database" className="text-primary" /> Data_Persistence
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {[
                     { name: 'PostgreSQL', level: 'Expert', desc: 'Complex queries, Indexing, PL/pgSQL' },
                     { name: 'MongoDB', level: 'Advanced', desc: 'Aggregation, Sharding, Replica Sets' },
                     { name: 'Redis', level: 'Intermediate', desc: 'Caching strategies, Pub/Sub' },
                     { name: 'Elasticsearch', level: 'Intermediate', desc: 'Full-text search, Analytics' }
                   ].map(db => (
                      <div key={db.name} className="p-4 rounded-lg bg-[#162c20] border border-[#23482f] flex flex-col gap-2">
                         <div className="flex items-center justify-between">
                            <span className="text-white font-semibold">{db.name}</span>
                            <span className="text-xs font-mono bg-[#23482f] text-primary px-2 py-1 rounded">{db.level}</span>
                         </div>
                         <p className="text-xs text-gray-400">{db.desc}</p>
                      </div>
                   ))}
                </div>
             </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
             {/* DevOps */}
             <section>
                <h3 className="flex items-center gap-2 text-white text-xl font-bold mb-6 font-mono">
                   <Icon name="build" className="text-primary" /> DevOps_&_Tools
                </h3>
                <div className="rounded-xl border border-[#23482f] bg-[#0a140d] p-6 relative overflow-hidden">
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#13ec5b 1px, transparent 1px), linear-gradient(90deg, #13ec5b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                   <div className="relative z-10 flex flex-wrap gap-3">
                      {['Docker', 'Kubernetes', 'Jenkins', 'Git & GitHub', 'AWS Core', 'Bash Scripting', 'Grafana'].map(tool => (
                         <span key={tool} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#23482f] bg-[#162c20] text-gray-200 text-sm hover:border-primary hover:text-white transition-colors cursor-default">
                            <Icon name="terminal" className="text-sm text-primary" /> {tool}
                         </span>
                      ))}
                   </div>
                </div>
             </section>

             {/* Libs */}
             <section>
                <h3 className="flex items-center gap-2 text-white text-xl font-bold mb-6 font-mono">
                   <Icon name="library_books" className="text-primary" /> Libs_&_Frameworks
                </h3>
                <div className="grid grid-cols-2 gap-4">
                   {[
                     { name: 'Quarkus', sub: 'Supersonic Subatomic Java', icon: 'bolt' },
                     { name: 'Hibernate', sub: 'ORM & JPA Provider', icon: 'dataset' },
                     { name: 'Apache Kafka', sub: 'Event Streaming', icon: 'api' },
                     { name: 'JUnit 5', sub: 'Unit & Integration Testing', icon: 'bug_report' }
                   ].map(lib => (
                      <div key={lib.name} className="rounded-lg bg-[#162c20] p-4 border border-[#23482f] hover:border-primary/30 transition-all group">
                         <div className="mb-2 h-8 w-8 rounded-md bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Icon name={lib.icon} />
                         </div>
                         <h4 className="text-white font-bold text-sm">{lib.name}</h4>
                         <p className="text-xs text-gray-500 mt-1">{lib.sub}</p>
                      </div>
                   ))}
                </div>
             </section>

             {/* Updates */}
             <section className="mt-auto">
                <div className="rounded-lg bg-[#0a140d] border-l-4 border-primary p-4">
                   <div className="flex items-center gap-2 mb-2">
                      <Icon name="sync" className="text-primary text-sm animate-spin" />
                      <h4 className="text-primary text-sm font-bold font-mono uppercase tracking-wider">Installing_Updates...</h4>
                   </div>
                   <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs text-gray-400 font-mono">
                         <span>Rust (Systems Programming)</span>
                         <span>45%</span>
                      </div>
                      <div className="w-full h-1 bg-[#162c20] rounded-full overflow-hidden">
                         <div className="h-full bg-gray-500 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 font-mono mt-1">
                         <span>GraphQL Federation</span>
                         <span>30%</span>
                      </div>
                      <div className="w-full h-1 bg-[#162c20] rounded-full overflow-hidden">
                         <div className="h-full bg-gray-500 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                   </div>
                </div>
             </section>
          </div>
       </div>
    </div>
  );
};

export default Skills;
