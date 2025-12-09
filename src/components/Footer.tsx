import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Tejashh16', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tejash-kanagaraj/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rktejash2006@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold gradient-text-blue mb-2">Tejash</div>
            <p className="text-gray-400 text-sm flex items-center gap-2 justify-center md:justify-start">
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 glass rounded-full hover:glass-strong hover:scale-110 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-400">
          <p>© {currentYear} Tejash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
