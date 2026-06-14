import { motion } from "motion/react";

const editorialProcess = [
  {
    step: "01",
    title: "Manuscript Review",
    description:
      "Review the manuscript, requirements, target audience, and publication or academic guidelines.",
  },
  {
    step: "02",
    title: "Content Development",
    description:
      "Assess structure, clarity, coherence, argument strength, and overall content quality.",
  },
  {
    step: "03",
    title: "Editing & Formatting",
    description:
      "Improve language, flow, readability, academic tone, grammar, and style consistency.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Ensure accurate citations, references, formatting, and compliance with required guidelines.",
  },
  {
    step: "05",
    title: "Final Delivery",
    description:
      "Perform quality checks, deliver the polished document, and provide revision support.",
  },
];

const researchProcess = [
  {
    step: "01",
    title: "Research Planning",
    description:
      "Define objectives, research questions, scope, and expected deliverables.",
  },
  {
    step: "02",
    title: "Literature Review",
    description:
      "Identify relevant sources, evaluate existing research, and establish theoretical foundations.",
  },
  {
    step: "03",
    title: "Data Collection",
    description:
      "Gather, verify, and organize information from credible academic and professional sources.",
  },
  {
    step: "04",
    title: "Analysis & Interpretation",
    description:
      "Interpret findings, identify patterns, and develop evidence-based insights and conclusions.",
  },
  {
    step: "05",
    title: "Report Preparation",
    description:
      "Prepare structured research reports, documentation, and final project deliverables.",
  },
];

export function WorkflowSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#003CFF]/10 to-[#4F7CFF]/10 border border-[#003CFF]/20 text-[#003CFF] text-sm font-medium">
              Workflow
            </span>
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How I Deliver Results
          </h2>

          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Whether supporting research projects or preparing publication-ready
            content, I follow a structured workflow that ensures quality,
            clarity, and efficiency at every stage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Editorial Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-center text-[#0F172A] mb-8">
              Editorial Associate
            </h3>

            <div className="space-y-6">
              {editorialProcess.map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] text-white flex items-center justify-center font-bold">
                      {item.step}
                    </div>

                    <h4 className="text-xl font-semibold text-[#0F172A]">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Research Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-center text-[#0F172A] mb-8">
              Research Assistant
            </h3>

            <div className="space-y-6">
              {researchProcess.map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] text-white flex items-center justify-center font-bold">
                      {item.step}
                    </div>

                    <h4 className="text-xl font-semibold text-[#0F172A]">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}