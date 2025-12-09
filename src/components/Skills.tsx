import { Braces, Palette, Database, Layout, Globe, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Braces,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'],
      color: 'blue',
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase'],
      color: 'green',
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'Animation'],
      color: 'purple',
    },
    {
      icon: Layout,
      title: 'Tools & Platforms',
      skills: ['Git', 'VS Code', 'Docker', 'Vercel', 'AWS'],
      color: 'orange',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'REST API', 'GraphQL'],
      color: 'pink',
    },
    {
      icon: Zap,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability'],
      color: 'cyan',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30',
      green: 'from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30',
      purple: 'from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30',
      orange: 'from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30',
      pink: 'from-pink-500/20 to-pink-600/20 hover:from-pink-500/30 hover:to-pink-600/30',
      cyan: 'from-cyan-500/20 to-cyan-600/20 hover:from-cyan-500/30 hover:to-cyan-600/30',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-strong p-8 rounded-3xl hover-lift fade-in-section group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getColorClasses(category.color)} flex items-center justify-center mb-6 transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4">{category.title}</h3>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 fade-in-section" style={{ animationDelay: '0.6s' }}>
          <div className="glass-strong p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold gradient-text-blue mb-2">30+</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="glass-strong p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold gradient-text-blue mb-2">3+</div>
            <p className="text-gray-400">Years Learning</p>
          </div>
          <div className="glass-strong p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold gradient-text-blue mb-2">100%</div>
            <p className="text-gray-400">Commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
