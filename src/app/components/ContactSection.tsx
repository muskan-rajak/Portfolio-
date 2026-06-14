import { motion } from "motion/react";
import { Mail, Linkedin, BookOpen, GraduationCap, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "muskanrajak0506@gmail.com",
    href: "mailto:muskanrajak0506@gmail.com",
    color: "from-[#003CFF] to-[#0057FF]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/muskanrajak",
    href: "https://linkedin.com/in/muskanrajak",
    color: "from-[#0057FF] to-[#4F7CFF]",
  },
  {
    icon: BookOpen,
    label: "ResearchGate",
    value: "Muskan Rajak",
    href: "https://researchgate.net",
    color: "from-[#4F7CFF] to-[#003CFF]",
  },
  {
    icon: GraduationCap,
    label: "Google Scholar",
    value: "View Profile",
    href: "https://scholar.google.com",
    color: "from-[#003CFF] to-[#4F7CFF]",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#0F172A] to-[#1e293b] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#003CFF]/20 to-[#4F7CFF]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0057FF]/20 to-[#003CFF]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-[#003CFF] via-[#0057FF] to-[#4F7CFF] bg-clip-text text-transparent">
              Meaningful Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Whether you need research assistance, academic writing, or content strategy,
            I'm here to help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Connect With Me
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{method.label}</p>
                      <p className="text-lg font-semibold text-white">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <h4 className="font-semibold text-lg mb-3">Response Time</h4>
              <p className="text-gray-300 mb-4">
                I typically respond to all inquiries within 24-48 hours. For urgent requests,
                please mention it in your message.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for new projects
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#003CFF] focus:ring-[#003CFF] h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#003CFF] focus:ring-[#003CFF] h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Research Collaboration Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#003CFF] focus:ring-[#003CFF] h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#003CFF] focus:ring-[#003CFF] min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#003CFF] to-[#0057FF] hover:from-[#0057FF] hover:to-[#003CFF] text-white py-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
