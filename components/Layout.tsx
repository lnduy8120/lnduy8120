import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Icon } from './Common';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { path: '/about', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  // const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#23482f]/50 bg-background-dark/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="flex size-8 items-center justify-center rounded bg-primary/20 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <Icon name="terminal" />
            </div>
            <h2 className="font-mono text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
              {'<DevPortfolio />'}
            </h2>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-mono text-sm font-bold transition-colors ${
                    isActive ? 'text-primary' : 'text-slate-300 hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             <NavLink to="/contact" className="hidden md:flex bg-primary hover:bg-green-400 text-background-dark px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-[0_0_10px_rgba(19,236,91,0.2)] hover:shadow-[0_0_15px_rgba(19,236,91,0.4)] items-center gap-2">
                <Icon name="work" className="text-[18px]" />
                <span>Hire Me</span>
             </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-300 transition-colors hover:text-white hover:bg-white/10 rounded-md"
            >
              <Icon name={isMenuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 top-16 bg-background-dark/95 backdrop-blur-xl border-t border-slate-800 p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-lg font-mono font-bold transition-colors ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-slate-300 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-primary text-background-dark px-4 py-3 rounded-lg text-lg font-bold"
            >
              <Icon name="work" />
              Hire Me
            </NavLink>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#23482f]/50 bg-background-dark py-8 font-mono mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/20 text-primary">
                <Icon name="terminal" className="text-[18px]" />
              </div>
              <div className="text-sm text-slate-400">
                <span className="text-primary">© 2024</span> <span className="font-bold text-slate-200">DevPortfolio</span>. All rights reserved.
              </div>
            </div>
            <div className="flex gap-6">
              {['code', 'work', 'flutter_dash', 'mail'].map((icon, i) => (
                <a key={i} href="#" className="text-slate-400 transition-colors hover:text-primary hover:scale-110">
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
