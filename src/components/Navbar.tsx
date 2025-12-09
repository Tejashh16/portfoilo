import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-strong py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold gradient-text-blue hover:scale-105 transition-transform duration-300"
          >
            Tejash
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 glass rounded-full text-sm font-medium text-white hover:glass-strong hover:scale-105 transition-all duration-300 glow-soft"
            >
              Get in Touch
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 glass rounded-lg hover:glass-strong transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 p-4 glass-strong rounded-2xl space-y-3 animate-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
