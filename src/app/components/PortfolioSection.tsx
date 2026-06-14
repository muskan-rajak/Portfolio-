/*import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const categories = ["All", "Academic Writing", "Research", "Content Strategy", "Editorial"];

const projects = [
  {
    title: "Editorial Services for Academic Journal",
    category: "Editorial",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    problem: "Journal needed editorial support for special issue on emerging technologies",
    process: "Reviewed 30+ submissions, coordinated peer review, ensured quality standards",
    outcome: "Successfully published special issue, maintained high editorial standards",
    tags: ["Peer Review", "Quality Control", "Coordination"],
  },
  {
    title: "LinkedIn Personal Branding Campaign",
    category: "Content Strategy",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    problem: "Professional needed to build thought leadership on LinkedIn",
    process: "Profile optimization, content strategy, consistent posting schedule, engagement tactics",
    outcome: "Grew from 500 to 5,000+ followers in 4 months, featured in industry publications",
    tags: ["LinkedIn", "Personal Brand", "Growth"],
  },
  {
    title: "Conference Paper on Research Innovation",
    category: "Academic Writing",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    problem: "Opportunity to present research at international conference",
    process: "Research design, data analysis, paper writing, presentation preparation",
    outcome: "Accepted for oral presentation, received best paper nomination",
    tags: ["Conference", "Presentation", "Award Nomination"],
  },
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
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
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Featured Work & Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Real results from research projects, publications, and content strategies
          </p>
        </motion.div>

        {/* Category Filter *//*}
/*        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#003CFF] to-[#0057FF] text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid *//*}
/*        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Thumbnail *//*}
/*                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-[#003CFF]" />
                    </div>
                  </div>
                </div>

                {/* Content *//*}
/*                <div className="p-6 flex-1 flex flex-col">
                  {/* Category Badge *//*}
/*                  <div className="mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#003CFF]/10 to-[#4F7CFF]/10 text-[#003CFF] dark:text-[#4F7CFF]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-4 group-hover:text-[#003CFF] dark:group-hover:text-[#4F7CFF] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>

                  <div className="space-y-3 mb-4 flex-1">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Problem</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Process</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.process}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Outcome</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Tags *//*}
/*                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View More *//*}
/*                  <Button
                    variant="ghost"
                    className="w-full justify-between text-[#003CFF] dark:text-[#4F7CFF] hover:bg-[#003CFF]/5 dark:hover:bg-[#4F7CFF]/5 group/btn"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button *//*}
/*        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#003CFF] text-[#003CFF] dark:border-[#4F7CFF] dark:text-[#4F7CFF] hover:bg-[#003CFF] hover:text-white dark:hover:bg-[#4F7CFF] px-8 py-6 rounded-xl"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}*/
