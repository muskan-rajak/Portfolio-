import { motion } from "motion/react";
import { Award, BookOpen, Target, Sparkles, PenTool, Computer } from "lucide-react";

const timeline = [
  {
    year: "2026",
    title: "Editor",
    description: "Content Editing as per Publication Guidelines",
  },
  {
    year: "2026",
    title: "International Publications",
    description: "Edited & Authored Journal Paper & Book Chapter"
  },
  {
    year: "2025",
    title: "Writer",
    description: "Memoir, Policy, & Academic Writer"
  },
  {
    year: "2024",
    title: "Research Presentation",
    description: "Presented Research Paper in Conference"
  },
  {
    year: "2019",
    title: "R&D Delegate",
    description: "Amongst Top 25 NITI Aayog Delegate to Sirius Center, Russia",
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#003CFF]/20 to-[#4F7CFF]/20 rounded-3xl blur-3xl" />
              <img
                src="/muskan2.jpg"
                alt="Muskan Rajak"
              />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0F172A]">15+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#003CFF]/10 to-[#4F7CFF]/10 border border-[#003CFF]/20 text-[#003CFF] text-sm font-medium">
                About Me
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Transforming Content into Impact
            </h2>

            <div className="space-y-4 text-lg text-gray-600 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              <p>
                I'm Muskan Rajak, an editor, researcher, and academic writer specializing in scholarly publishing, content development, and research communication. I help researchers, organizations, and businesses transform complex ideas into clear, engaging, and publication-ready content.              </p>
              <p>
                With experience publishing in internationally recognized journals, presenting at academic conferences, and supporting research and editorial projects, I combine rigorous research methodology, precise editing, and strategic content development to deliver work that is accurate, accessible, and impactful.              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: BookOpen, label: "Manuscript Editing" },
                { icon: Target, label: "Publication Support" },
                { icon: PenTool, label: "Academic Writing" },
                { icon: Award, label: "Research & Literature Reviews" },
                { icon: Computer, label: "Editorial Operations" },
                { icon: Target, label: "Content Strategy & SEO" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#003CFF]/10 to-[#4F7CFF]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#003CFF]" />
                    </div>
                    <span className="font-medium text-[#0F172A]">{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Journey Highlights
              </h3>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                      {item.year}
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-[#003CFF] to-transparent mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="font-semibold text-[#0F172A] text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
