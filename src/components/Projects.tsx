import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI Study Companion',
      description: 'An intelligent study assistant that helps students organize notes, create flashcards, and track learning progress with AI-powered insights.',
      image: 'https://freeimage.host/i/fRCBjwX',
      tags: ['React', 'AI/ML', 'Firebase'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Flow',
      description: 'A beautiful and intuitive task management app with real-time collaboration, smart scheduling, and productivity analytics.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TypeScript', 'Node.js', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Design System Hub',
      description: 'A comprehensive design system library with reusable components, documentation, and interactive playground for rapid prototyping.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Tailwind', 'Storybook'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Campus Connect',
      description: 'A social platform for students to connect, share resources, form study groups, and discover campus events in real-time.',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work and creative explorations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-strong rounded-3xl overflow-hidden hover-lift group fade-in-section"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 glass rounded-full text-xs font-medium text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium hover:glass-strong transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
