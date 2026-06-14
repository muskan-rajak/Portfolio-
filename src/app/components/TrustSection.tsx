import { motion } from "motion/react";
import { BookOpen, Users, PenTool, Globe } from "lucide-react";

const metrics = [
  {
    icon: BookOpen,
    value: "2",
    label: "Published Research",
    description: "Peer-reviewed publications",
  },
  {
    icon: Users,
    value: "5+",
    label: "Long-Form Content Edited",
    description: "Publication-ready content",
  },
  {
    icon: PenTool,
    value: "3+",
    label: "Editorial Experience",
    description: "Years of academic writing",
  },
  {
    icon: Globe,
    value: "4+",
    label: "International Collaborations",
    description: "Research partnerships",
  },
];

export function TrustSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Trusted by Authors, Organisations, & Researchers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Building credibility through impactful content and collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                  
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-[#003CFF] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {metric.value}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                    {metric.label}
                  </h3>
                  
                  <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
