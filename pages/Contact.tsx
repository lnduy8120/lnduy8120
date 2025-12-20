import React from 'react';
import { SectionTitle, Icon, CodeKeyword, CodeFunction, CodeString, CodeComment, CodeVariable } from '../components/Common';
import data from '../data';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-10 px-4 md:px-10">
       <div className="flex flex-col gap-6">
          <div className="space-y-2">
             <h1 className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tighter">
                <CodeKeyword>public class</CodeKeyword> Contact {'{'}
             </h1>
             <p className="text-slate-500 font-mono text-sm md:text-base italic">
                // Initiate communication protocol. <br/>
                // I am currently available for freelance work.
             </p>
          </div>

          <div className="bg-[#1e1e1e] border border-[#333] rounded-lg shadow-xl overflow-hidden font-mono text-sm md:text-base leading-relaxed relative group">
             <div className="bg-[#252526] px-4 py-2 border-b border-[#333] flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-gray-500">ContactInfo.java</span>
             </div>
             <div className="p-6 text-gray-300 overflow-x-auto">
                <div className="flex">
                   <span className="text-gray-600 select-none text-right pr-4 w-8">1</span>
                   <div><CodeKeyword>private final</CodeKeyword> <CodeFunction>String</CodeFunction> email = <CodeString>"{data.contact.email}"</CodeString>;</div>
                </div>
                <div className="flex">
                   <span className="text-gray-600 select-none text-right pr-4 w-8">2</span>
                   <div><CodeKeyword>private final</CodeKeyword> <CodeFunction>String</CodeFunction> location = <CodeString>"{data.contact.location}"</CodeString>;</div>
                </div>
                <div className="flex"><span className="text-gray-600 select-none text-right pr-4 w-8">3</span><div>&nbsp;</div></div>
                <div className="flex">
                   <span className="text-gray-600 select-none text-right pr-4 w-8">4</span>
                   <div><CodeComment>// Connect via social networks</CodeComment></div>
                </div>
                <div className="flex">
                   <span className="text-gray-600 select-none text-right pr-4 w-8">5</span>
                   <div><CodeKeyword>public void</CodeKeyword> <CodeFunction>connect</CodeFunction>() {'{'}</div>
                </div>
                <div className="flex">
                   <span className="text-gray-600 select-none text-right pr-4 w-8">6</span>
                   <div className="pl-8 text-gray-400">
                      <CodeVariable>System</CodeVariable>.<CodeVariable>out</CodeVariable>.<CodeFunction>println</CodeFunction>(<CodeString>"Select platform below..."</CodeString>);
                   </div>
                </div>
                <div className="flex">
                   <span className="text-gray-600 select-none text-right pr-4 w-8">7</span>
                   <div>{'}'}</div>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             {data.contact.social.map(social => (
                <a key={social.name} href={social.href} className="group flex items-center justify-center gap-3 bg-[#1e1e1e] border border-[#333] hover:border-primary p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(19,236,91,0.15)]">
                   <Icon name={social.icon} className="text-white group-hover:text-primary transition-colors" />
                   <div className="flex flex-col">
                      <span className="text-white text-sm font-bold font-mono group-hover:text-primary">{social.name}</span>
                      <span className="text-xs text-gray-500 group-hover:text-gray-400">{social.handle}</span>
                   </div>
                </a>
             ))}
          </div>
       </div>

       <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 md:p-8 shadow-2xl relative">
          <div className="absolute -top-3 left-8 bg-[#1e1e1e] px-2 text-primary text-xs font-mono border border-[#333] rounded">MESSAGE_BUFFER</div>
          <form className="flex flex-col gap-6 h-full font-mono">
             <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-sm font-bold flex items-center gap-2">
                   <span className="text-primary">{'>'}</span> String name
                </label>
                <input type="text" className="w-full bg-[#121212] border-b-2 border-[#333] focus:border-primary focus:ring-0 text-white placeholder-gray-600 px-3 py-3 transition-colors rounded-t-md" placeholder='e.g. "Jane Doe"' />
             </div>
             <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-sm font-bold flex items-center gap-2">
                   <span className="text-primary">{'>'}</span> String email
                </label>
                <input type="email" className="w-full bg-[#121212] border-b-2 border-[#333] focus:border-primary focus:ring-0 text-white placeholder-gray-600 px-3 py-3 transition-colors rounded-t-md" placeholder='e.g. "jane@tech.com"' />
             </div>
             <div className="flex flex-col gap-1 flex-grow">
                <label className="text-gray-400 text-sm font-bold flex items-center gap-2">
                   <span className="text-primary">{'>'}</span> String message
                </label>
                <textarea className="w-full flex-grow min-h-[150px] bg-[#121212] border-b-2 border-[#333] focus:border-primary focus:ring-0 text-white placeholder-gray-600 px-3 py-3 transition-colors rounded-t-md resize-none" placeholder='System.out.println("Hello, I would like to work with you...");'></textarea>
             </div>
             <div className="pt-4 flex items-center justify-between">
                <div className="text-xs text-gray-500 hidden sm:block">// Ready to execute</div>
                <button type="button" className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary px-8 py-3 font-mono font-bold text-[#121212] transition-all duration-300 hover:bg-[#13ec5b]/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#121212]">
                   <Icon name="terminal" className="mr-2 text-lg" />
                   Run Program
                   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shine"></div>
                </button>
             </div>
          </form>
       </div>
    </div>
  );
};

export default Contact;