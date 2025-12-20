import { SectionTitle, TerminalWindow, CodeKeyword, CodeFunction, CodeString, CodeComment, Icon } from '../components/Common';
import data from '../data';

const About = () => {
  return (
    <div className="py-10 px-4 md:px-10 lg:px-40 w-full max-w-[1440px] mx-auto">
      <SectionTitle title="About Me" subtitle="// SYSTEM.OUT.PRINTLN('HELLO WORLD');" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full">
        {/* Left Column: Image and Bio */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#23482f] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-terminal-bg rounded-lg border border-[#23482f] overflow-hidden flex flex-col">
              <div className="h-8 bg-[#1c2128] border-b border-[#30363d] flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-gray-400 font-mono">profile_pic.png</span>
              </div>
              <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: 'url("https://picsum.photos/800/800?grayscale")' }}>
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Icon name="person" className="text-primary" />
              Who I Am
            </h3>
            {data.about.bio.map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed text-base font-light">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="px-3 py-1 bg-[#1c3325] text-[#13ec5b] rounded text-sm font-mono border border-[#23482f] flex items-center gap-1">
                <Icon name="location_on" className="text-[14px]" /> {data.profile.location}
              </span>
              <span className="px-3 py-1 bg-[#1c3325] text-[#13ec5b] rounded text-sm font-mono border border-[#23482f] flex items-center gap-1">
                <Icon name="translate" className="text-[14px]" /> {data.profile.languages}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Code, Stats, History */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <TerminalWindow title="Stack.java">
             <div className="text-gray-300">
                <CodeKeyword>package</CodeKeyword> com.portfolio.skills;<br/><br/>
                <CodeKeyword>public class</CodeKeyword> <CodeFunction>TechStack</CodeFunction> {'{'}<br/>
                &nbsp;&nbsp;<CodeComment>// Core Technologies</CodeComment><br/>
                &nbsp;&nbsp;<CodeKeyword>private final</CodeKeyword> String[] <CodeFunction>languages</CodeFunction> = {'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<CodeString>"Java 17+"</CodeString>, <CodeString>"Kotlin"</CodeString>, <CodeString>"SQL"</CodeString>, <CodeString>"Python"</CodeString><br/>
                &nbsp;&nbsp;{'}'};<br/><br/>
                &nbsp;&nbsp;<CodeComment>// Frameworks & Libraries</CodeComment><br/>
                &nbsp;&nbsp;<CodeKeyword>private final</CodeKeyword> String[] <CodeFunction>frameworks</CodeFunction> = {'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<CodeString>"Spring Boot"</CodeString>, <CodeString>"Hibernate"</CodeString>, <CodeString>"Micronaut"</CodeString><br/>
                &nbsp;&nbsp;{'}'};<br/><br/>
                &nbsp;&nbsp;<CodeComment>// Infrastructure & DevOps</CodeComment><br/>
                &nbsp;&nbsp;<CodeKeyword>public</CodeKeyword> <CodeKeyword>void</CodeKeyword> <CodeFunction>deploy</CodeFunction>() {'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Docker.containerize();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Kubernetes.orchestrate();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;AWS.scale();<br/>
                &nbsp;&nbsp;{'}'}<br/>
                {'}'}
             </div>
          </TerminalWindow>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {data.about.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1 rounded-lg p-5 bg-[#112217] border border-[#23482f] relative overflow-hidden group hover:border-primary transition-colors">
                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Icon name={stat.icon} className="text-4xl" />
                  </div>
                  <p className="text-[#92c9a4] text-xs font-mono uppercase tracking-wider">{stat.label}</p>
                  <p className="text-white text-3xl font-bold font-mono group-hover:text-primary transition-colors">{stat.value}</p>
                </div>
             ))}
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
              <Icon name="history" className="text-primary" />
              Git Log (History)
            </h3>
            <div className="relative pl-8 border-l border-[#23482f] space-y-8">
              {data.about.history.map((job, idx) => (
                <div key={idx} className="relative group">
                  <div className={`absolute -left-[39px] bg-[#102216] border-2 ${idx === 0 ? 'border-primary' : 'border-[#23482f] group-hover:border-primary'} transition-colors rounded-full p-1`}>
                    <div className={`w-3 h-3 ${idx === 0 ? 'bg-primary' : 'bg-[#23482f] group-hover:bg-primary'} transition-colors rounded-full`}></div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono text-[#92c9a4] mb-1">{job.period}</span>
                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{job.role}</h4>
                    <p className="text-sm text-gray-400">{job.company}</p>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;