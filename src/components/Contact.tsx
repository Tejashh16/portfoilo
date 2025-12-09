import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tejash@example.com',
      href: 'mailto:tejash@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 fade-in-section">
            <div>
              <h3 className="text-3xl font-bold mb-4">Let's work together</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always excited to collaborate on interesting projects and connect with fellow developers and designers. Whether you have a question, opportunity, or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-4 glass-strong p-5 rounded-2xl hover-lift group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{item.title}</div>
                      <div className="font-medium group-hover:text-blue-400 transition-colors duration-300">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="fade-in-section" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 glass-strong rounded-xl bg-transparent border border-white/10 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 glass-strong rounded-xl bg-transparent border border-white/10 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 glass-strong rounded-xl bg-transparent border border-white/10 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] glow-soft flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
