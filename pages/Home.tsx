import { NavLink } from 'react-router-dom';
import { TerminalWindow, CodeKeyword, CodeClass, CodeFunction, CodeString, Icon } from '../components/Common';
import data from '../data';

const Home = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 min-h-[calc(100vh-64px)] flex items-center">
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(#13ec5b 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Column: Intro */}
          <div className="flex flex-col gap-6 text-left">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              {data.profile.status}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">{data.profile.name}</span>.
              </h1>
              
              <div className="font-mono text-lg sm:text-xl text-slate-600 dark:text-slate-300 bg-background-dark-accent/50 p-4 rounded-lg border-l-4 border-primary">
                <span className="text-primary">public class</span> <span className="text-yellow-300">JavaDeveloper</span> <span className="text-primary">extends</span> <span className="text-yellow-300">Expert</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-slate-400">// Building scalable backends</span><br/>
                {'}'}
              </div>
              
              <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {data.profile.intro}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <NavLink to="/projects" className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-background-dark transition-transform hover:scale-105 hover:bg-emerald-400">
                View Projects
              </NavLink>
              <NavLink to="/contact" className="flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-6 text-base font-bold text-slate-900 dark:text-white transition-colors hover:border-primary hover:text-primary">
                Contact Me
              </NavLink>
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-slate-400 grayscale transition-all hover:grayscale-0">
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Tech Stack:</span>
              <div className="flex gap-4 text-2xl">
                 <Icon name="coffee" className="text-2xl hover:text-primary transition-colors cursor-pointer" />
                 <Icon name="database" className="text-2xl hover:text-primary transition-colors cursor-pointer" />
                 <Icon name="cloud" className="text-2xl hover:text-primary transition-colors cursor-pointer" />
                 <Icon name="security" className="text-2xl hover:text-primary transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          
          {/* Right Column: Code Block */}
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            <TerminalWindow title="Main.java" className="relative z-10">
                <div><CodeKeyword>package</CodeKeyword> com.portfolio;</div>
                <div className="mt-2"><CodeKeyword>import</CodeKeyword> org.springframework.boot.SpringApplication;</div>
                <div className="mb-4"><CodeKeyword>import</CodeKeyword> org.springframework.boot.autoconfigure.SpringBootApplication;</div>
                
                <div><CodeClass>@SpringBootApplication</CodeClass></div>
                <div><CodeKeyword>public class</CodeKeyword> <CodeClass>Application</CodeClass> {'{'}</div>
                
                <div className="ml-4 mt-2"><CodeKeyword>public static void</CodeKeyword> <CodeFunction>main</CodeFunction>(String[] args) {'{'}</div>
                <div className="ml-8 text-slate-400">// Initialize the developer profile</div>
                <div className="ml-8"><CodeClass>Developer</CodeClass> dev = <CodeKeyword>new</CodeKeyword> <CodeClass>Developer</CodeClass>(<CodeString>"{data.profile.name}"</CodeString>);</div>
                <div className="ml-8">dev.setSkills(<CodeString>"Java"</CodeString>, <CodeString>"Spring Boot"</CodeString>, <CodeString>"AWS"</CodeString>);</div>
                <div className="ml-8">dev.setStatus(<CodeString>"READY_TO_BUILD"</CodeString>);</div>
                
                <div className="ml-8 mt-2">SpringApplication.run(Application.<CodeKeyword>class</CodeKeyword>, args);</div>
                <div className="ml-4">{'}'}</div>
                <div>{'}'}</div>
                
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-primary">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="animate-pulse w-2 h-4 bg-primary inline-block"></span>
                </div>
            </TerminalWindow>
            
            {/* Background Glows */}
            <div className="absolute -top-12 -right-12 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;