import { motion } from "motion/react";
import { BookOpen, PenTool, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: PenTool,
    title: "Content Writing & Editing",
    color: "from-[#0057FF] to-[#4F7CFF]",
    skills: [
      "Academic Writing",
      "Manuscript Development",
      "Journal Article Writing",
      "Research Communication",
      "Copy Editing",
      "Proofreading",
      "Publication Support",
      "Citation Management",
    ],
  },
  {
    icon: BookOpen,
    title: "Research & Analysis",
    color: "from-[#003CFF] to-[#0057FF]",
    skills: [
      "Literature Reviews",
      "Research Methodology",
      "Policy Research",
      "Systematic Reviews",
      "Qualitative Analysis",
      "Academic Research",
      "Data Interpretation",
      "Research Design",
    ],
  },
  {
    icon: Wrench,
    title: "Research & Editing Tools",
    color: "from-[#4F7CFF] to-[#003CFF]",
    skills: [
      "Content Management System",
      "Google Docs",
      "Reference Management",
      "LaTeX",
      "Mendeley",
      "Zotero",
      "Microsoft Office",
      "Google Scholar",
      "Word Track Changes",
    ],
  },
];

export function SkillsSection() {
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
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#003CFF]/10 to-[#4F7CFF]/10 border border-[#003CFF]/20 text-[#003CFF] text-sm font-medium">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            A comprehensive toolkit for research and academic excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="cursor-default"
                      >
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold hover:shadow-md transition-all duration-300`}>
                          {skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                Additional Competencies
              </h3>
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  "Content Editing",
                  "Research Assistance",
                  "Ghostwriting",
                  "Proofreading",
                  "Academic Writing",
                  "Citation Management",
                  "Academic Presentation",
                  "Research Ethics",
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
