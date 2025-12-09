import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 pt-20"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-6 py-2 glass rounded-full text-sm font-medium text-blue-400 border border-blue-500/20 fade-in-section">
          👋 Available for opportunities
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 fade-in-section" style={{ animationDelay: '0.1s' }}>
          Hi, I'm{' '}
          <span className="gradient-text text-glow">Tejash</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed fade-in-section" style={{ animationDelay: '0.2s' }}>
          A passionate student exploring the intersection of{' '}
          <span className="text-blue-400 font-semibold">design</span>,{' '}
          <span className="text-purple-400 font-semibold">technology</span>, and{' '}
          <span className="text-pink-400 font-semibold">innovation</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 fade-in-section" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all duration-300 hover:scale-105 glow-soft"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass rounded-full font-medium hover:glass-strong transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 fade-in-section" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:glass-strong hover:scale-110 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:glass-strong hover:scale-110 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:glass-strong hover:scale-110 transition-all duration-300 group"
          >
            <Twitter className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a
            href="mailto:tejash@example.com"
            className="p-3 glass rounded-full hover:glass-strong hover:scale-110 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </section>
  );
}
