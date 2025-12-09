import { BookOpen, Code2, Sparkles, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Tech Enthusiast',
      description: 'Passionate about building innovative solutions and learning new technologies',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learner',
      description: 'Always exploring new concepts and staying updated with industry trends',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on creating meaningful impact through thoughtful design and code',
    },
    {
      icon: Sparkles,
      title: 'Creative Mind',
      description: 'Combining creativity with technical skills to craft unique experiences',
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into my journey and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-in-section">
            <div className="glass-strong p-8 md:p-12 rounded-3xl hover-lift">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
                <img src="https://iili.io/3Mt1s7j.jpg" alt="Tejash Kanagaraj" class="profile-img">
              </div>
            </div>
          </div>

          <div className="space-y-6 fade-in-section" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-4">
              Building Tomorrow's <span className="gradient-text-blue">Solutions</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
             I'm an Electrical Engineering student with a love for VLSI and embedded systems—basically and wireless technology, I like making tiny things do big things. My obsession with circuit design started when I realized blinking LEDs could be way cooler than blinking cursor lines. These days, I'm all about cramming logic into silicon and pretending I understand timing diagrams on the first try (spoiler: I don’t—but I figure it out). Chip design is my jam, and I’m here for the bugs, the breakthroughs, and everything in between.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or learning about the latest advancements in tech. I believe in the power of continuous learning and collaboration.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {[ 'C programming', 'Python', 'Gen ai','Digital electronics','computer organization and architecture'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover:glass-strong transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-strong p-6 rounded-2xl hover-lift fade-in-section group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
