import { motion } from "motion/react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  FileText,
  Search,
  Edit,
  Briefcase,
  Linkedin,
  Sparkles,
  ArrowRight,
  X,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    id: "editing-proofreading",
    title: "Editing & Proofreading",
    description:
      "Professional editing services ensuring clarity, coherence, and academic standards.",
    deliverables: ["Copy Editing", "Substantive Editing", "Formatting"],
    details: [
      "Academic manuscripts",
      "Journal submissions",
      "APA 7 & Harvard formatting",
      "Reference verification",
      "Grammar & style refinement",
      "Consistency checks",
    ],
    turnaround: "2–5 Business Days",
    revisions: "2 Revision Rounds",
    price: "From ₹0.80 per word"
  },

  {
    icon: FileText,
    id: "academic-writing",
    title: "Academic Writing",
    description:
      "High-quality research papers, articles, and academic content.",
    deliverables: [
      "Research Papers",
      "Journal Articles",
      "Conference Papers",
    ],
    details: [
      "Research papers",
      "Journal articles",
      "Conference papers",
      "Case studies",
      "Academic reports",
      "Proper citations & referencing",
    ],
    turnaround: "5–10 Business Days",
    revisions: "2 Revision Rounds",
    price: "From ₹5,500"
  },

  {
    icon: Search,
    id: "research-assistance",
    title: "Research Assistance",
    description:
      "Comprehensive support for research projects.",
    deliverables: [
      "Research Design",
      "Data Collection",
      "Methodology Development",
    ],
    details: [
      "Topic selection",
      "Research questions",
      "Methodology design",
      "Data collection guidance",
      "Research planning",
      "Academic consultation",
    ],
    turnaround: "Custom Timeline",
    revisions: "Ongoing Support",
    price: "From ₹4,000"
  },

  {
    icon: Edit,
    id: "literature-reviews",
    title: "Literature Reviews",
    description:
      "Systematic and comprehensive literature reviews.",
    deliverables: [
      "Systematic Reviews",
      "Meta-Analysis",
      "Gap Identification",
    ],
    details: [
      "Database search",
      "Source screening",
      "Thematic synthesis",
      "Gap analysis",
      "Theory development",
      "Reference management",
    ],
    turnaround: "3–7 Business Days",
    revisions: "2 Revision Rounds",
    price: "From ₹3,000"
  },

  {
    icon: Briefcase,
    id: "content-writing",
    title: "Content Writing",
    description:
      "Strategic content creation for businesses and brands.",
    deliverables: [
      "Blog Posts",
      "Website Content",
      "Technical Writing",
    ],
    details: [
      "SEO blogs",
      "Website copy",
      "Thought leadership content",
      "Technical writing",
      "Research-backed articles",
      "Content optimization",
    ],
    turnaround: "2–4 Business Days",
    revisions: "2 Revision Rounds",
    price: "From ₹1.50 per word"
  },

  {
    icon: Linkedin,
    id: "linkedin-branding",
    title: "LinkedIn & Personal Branding",
    description:
      "Build a compelling professional presence.",
    deliverables: [
      "Profile Optimization",
      "Content Strategy",
      "Engagement Plans",
    ],
    details: [
      "Profile optimization",
      "Headline creation",
      "About section rewrite",
      "Content strategy",
      "Personal branding roadmap",
      "Audience growth tips",
    ],
    turnaround: "2–3 Business Days",
    revisions: "2 Revision Rounds",
    price: "From ₹6,000"
  },
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<any>(null);
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />
      
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
              Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            How I Can Help You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Premium research and writing services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                    <div className="w-full h-full bg-white rounded-2xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-[#0F172A] mb-3">Key Deliverables:</p>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#003CFF] mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <Button
                        variant="outline"
                        className="w-full border-[#003CFF] text-[#003CFF] hover:bg-[#003CFF] hover:text-white"
                        onClick={() => setSelectedService(service)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Need a custom package?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#003CFF] to-[#0057FF] hover:from-[#0057FF] hover:to-[#003CFF] text-white px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Get a Custom Quote
          </Button>
        </motion.div>
      </div>
      {selectedService && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      >    
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-3xl w-full max-w-2xl
             max-h-[90vh] overflow-y-auto
             shadow-[0_25px_80px_rgba(0,0,0,0.25)]
             relative"
      >

      {/* Close Button */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute top-5 right-5 text-gray-500 hover:text-black"
      >
        <X size={24} />
      </button>

      <div className="p-8">

        <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
          {selectedService.title}
        </h2>

        <p className="text-gray-600 mb-6">
          {selectedService.description}
        </p>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">
            What's Included
          </h3>

          <ul className="space-y-3">
            {selectedService.details?.map(
              (item: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-[#003CFF] mr-3" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">

          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">
              Turnaround Time
            </p>
            <p className="font-semibold">
              {selectedService.turnaround}
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">
              Revisions
            </p>
            <p className="font-semibold">
              {selectedService.revisions}
            </p>
          </div>

        </div>

        <div className="border-t pt-6">

          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">
              Starting Price: 
            </span>

            <span className="text-2xl font-bold text-[#003CFF]">
              {selectedService.price}
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Need something different? Custom packages are
            available for research, writing, and editorial
            projects.
          </p>

          <Button
            className="w-full bg-[#003CFF] hover:bg-[#002FCC] text-white py-6 rounded-xl"
            onClick={() => {
              setSelectedService(null);

              setTimeout(() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }, 200);
            }}
          >
            Discuss My Project
          </Button>

        </div>
      </div>
    </motion.div>
  </motion.div>
)}
    </section>
    
  );
}
