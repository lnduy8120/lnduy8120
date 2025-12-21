import { Icon } from '../components/Common';
import data from '../data';

const Resume = () => {
   return (
      <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 w-full max-w-[1200px] mx-auto min-h-[80vh]">
         <div className="text-center mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-border/50 border border-surface-border text-primary text-xs font-mono mb-4">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
               </span>
               {data.profile.status}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
               Grab a copy of <span className="text-primary">{'<my_cv />'}</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light font-mono">
               Detailed experience with {data.resume.competencies.slice(0, 3).join(', ')} architecture ready for your review.
            </p>
         </div>

         <div className="w-full max-w-4xl relative group">
            <div className="absolute -top-10 -left-10 text-surface-border/20 select-none pointer-events-none hidden lg:block font-mono text-6xl font-bold">{'{ }'}</div>
            <div className="absolute -bottom-10 -right-10 text-surface-border/20 select-none pointer-events-none hidden lg:block font-mono text-6xl font-bold">{';'}</div>

            <div className="bg-[#1e1e1e] border border-surface-border rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm relative z-10">
               <div className="bg-[#252525] px-4 py-3 flex items-center justify-between border-b border-surface-border">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-500 text-xs font-mono">user@portfolio: ~/documents/resume</div>
                  <div className="w-10"></div>
               </div>

               <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-[#121212] border-b md:border-b-0 md:border-r border-surface-border group overflow-hidden">
                     <div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://picsum.photos/800/1000?grayscale")' }}></div>
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent opacity-90"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#1e1e1e]/80 p-4 rounded-full border border-surface-border backdrop-blur-md">
                           <Icon name="description" className="text-primary text-4xl" />
                        </div>
                     </div>
                  </div>

                  <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                     <div>
                        <div className="flex justify-between items-start mb-4">
                           <div>
                              <h3 className="text-2xl font-bold text-white mb-1">{data.resume.filename}</h3>
                              <p className="text-sm text-gray-400 font-mono">{data.resume.size} • Last updated: {data.resume.lastUpdated}</p>
                           </div>
                           <span className="bg-primary/10 text-primary border border-primary/20 text-xs px-2 py-1 rounded font-mono">PDF</span>
                        </div>
                        <div className="bg-[#000000] rounded-lg p-4 mb-6 font-mono text-sm border border-surface-border/50 shadow-inner">
                           <div className="flex flex-col gap-1">
                              <p className="text-gray-500"><span className="text-primary">$</span> check_permissions --user=guest</p>
                              <p className="text-green-700">Access granted.</p>
                              <p className="text-gray-500"><span className="text-primary">$</span> scanning_file...</p>
                              <p className="text-white"><span className="text-primary">➜</span> Ready for download.</p>
                           </div>
                        </div>
                        <div className="mb-8">
                           <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-bold">Core Competencies</p>
                           <div className="flex flex-wrap gap-2">
                              {data.resume.competencies.map((skill, i) => (
                                 <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-border/50 border border-surface-border text-gray-200 text-xs font-mono hover:border-primary/50 transition-colors cursor-default">
                                    <Icon name={skill === 'Java' ? 'coffee' : skill === 'Spring Boot' ? 'bolt' : skill === 'SQL' ? 'database' : 'cloud'} className="text-[16px] text-primary" /> {skill}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                   <a 
                    href={data.resume.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary hover:bg-green-400 text-background-dark h-12 rounded-lg font-bold text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_14px_0_rgba(19,236,91,0.39)] flex items-center justify-center gap-2 group/btn"
                   >
                      <Icon name="download" className="group-hover/btn:animate-bounce" />
                      Download PDF
                   </a>
                   <a 
                    href={data.resume.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-transparent hover:bg-surface-border/30 text-white border border-surface-border hover:border-primary/50 h-12 rounded-lg font-medium text-base transition-all flex items-center justify-center gap-2 font-mono"
                   >
                      <Icon name="visibility" className="text-[20px]" />
                      View in Browser
                   </a>
                </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Resume;