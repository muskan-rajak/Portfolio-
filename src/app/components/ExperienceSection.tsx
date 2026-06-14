import { motion } from "motion/react";
import { Book , GraduationCap, Award, Users, Pen, Mic } from "lucide-react";

const experiences = [
  {
  icon: Pen,
  year: "2026",
  title: "Editor",
  organization: "BlueKraft Digital Foundation",
  type: "Editorial",
  description:
    "Specialized in transforming complex policy and institutional content into clear, professional, publication-ready documents.",
  achievements: [
    "Editorial review of 800+ pages of professional content",
    "Quality assurance for multi-author publications",
    "Publication-ready formatting and content refinement",
  ],
  color: "from-[#003CFF] to-[#0057FF]",
},
{
    icon: Award,
    year: "2026",
    title: "Springer Author",
    organization: "Springer International Publishing",
    type: "Publication",
    description: "Published peer-reviewed research article in international journal, contributing to academic knowledge in research methodologies and social sciences.",
    achievements: [
      "Successfully navigated peer review process",
      "Research cited by international scholars",
      "Contributed to academic discourse",
    ],
    color: "from-[#003CFF] to-[#0057FF]",
},
{
  icon: Award,
  year: "2025–2026",
  title: " Research, Writer, & Editorial Associate",
  organization: "Viksit Bharat Fellow",
  type: "Research, Writer, & Editor",
  description:
    "Contributed to high-impact research and policy publications through editing, citation management, and content enhancement.",
  achievements: [
    "Wrote 4 sections and edited 100,000+ words across reports and research publications",
    "Reference auditing and citation quality improvement",
    "Research content optimization for clarity and academic impact",
  ],
  color: "from-[#4F7CFF] to-[#003CFF]",
},
  {
    icon: Mic,
    year: "December 2025",
    title: "Conference Presenter",
    organization: "11th International Conference on Information and Communication Technology for Competitive Strategies",
    type: "Speaking",
    description: "Presented research findings on Internet of Things in academic writing to international audience of researchers and educators.",
    achievements: [
      "Delivered compelling oral presentation",
      "Engaged with global research community",
      "Nominated for best paper award",
    ],
    color: "from-[#0057FF] to-[#4F7CFF]",
  },
{
    icon: Book,
    year: "2025-2026",
    title: "Book Chapter Author",
    organization: "Wiley Publication",
    type: "Academic Publication",
    description: "Delivered end-to-end academic writing and editorial support for a contributed book chapter published through Wiley, from manuscript development to final revision.",
    achievements: [
      "Developed a 37-page research-based book chapter",
      "Applied academic editing, referencing, and publication standards throughout the writing process",
      "Worked closely with editors and peer reviewers to achieve publication-ready outcomes",
    ],
    color: "from-[#4F7CFF] to-[#003CFF]",
},
{
    icon: GraduationCap,
    year: "2019",
    title: "Research & Development Delegate",
    organization: "NITI Aayog & Sirius Center, Russia",
    type: "Research",
    description: "Represented India in an international innovation and research exchange program focused on entrepreneurship, innovation ecosystems, and cross-cultural collaboration.",
    achievements: [
      "Selected to participate in an international research delegation",
      "Explored global innovation ecosystems and policy-driven development models",
      "Produced research reflections, documentation, and knowledge-sharing outputs",
    ],
    color: "from-[#003CFF] to-[#4F7CFF]",
},
];

export function ExperienceSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-white dark:from-[#1e293b] dark:to-[#0F172A] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#003CFF]/10 to-[#4F7CFF]/10 border border-[#003CFF]/20 text-[#003CFF] dark:text-[#4F7CFF] text-sm font-medium">
              Experience
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            A timeline of research, publications, and professional milestones
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#003CFF] via-[#4F7CFF] to-[#003CFF] transform -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`${isEven ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative"
                      >
                        {/* Type Badge */}
                        <div className={`inline-block mb-4 ${isEven ? "lg:float-right lg:ml-4" : "lg:float-left lg:mr-4"}`}>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                            {exp.type}
                          </span>
                        </div>

                        <div className="clear-both">
                          <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                            {exp.title}
                          </h3>
                          <p className="text-lg font-medium text-[#003CFF] dark:text-[#4F7CFF] mb-4">
                            {exp.organization}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <div className={`space-y-2 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Achievements:</p>
                            {exp.achievements.map((achievement, achIndex) => (
                              <div
                                key={achIndex}
                                className={`flex items-start gap-2 ${isEven ? "lg:flex-row-reverse lg:text-right" : ""}`}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#003CFF] mt-2 flex-shrink-0" />
                                <p className="text-sm text-gray-600 dark:text-gray-400">{achievement}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Decorative Corner */}
                        <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-20 h-20 bg-gradient-to-br ${exp.color} opacity-10 rounded-2xl blur-xl`} />
                      </motion.div>
                    </div>

                    {/* Center Icon & Year (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        className="relative"
                      >
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          <span className="px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-[#003CFF] dark:text-[#4F7CFF] text-sm font-bold shadow-md">
                            {exp.year}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Mobile Icon & Year */}
                    <div className="lg:hidden flex items-center gap-4 order-first">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-lg font-bold text-[#003CFF] dark:text-[#4F7CFF]">
                        {exp.year}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
