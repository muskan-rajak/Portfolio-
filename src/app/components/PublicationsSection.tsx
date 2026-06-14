import { motion } from "motion/react";
import { FileText, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";

const publications = [
  {
    title: "Bridging Gaps in IoT Literature: A Thematic Categorization of Challenges and Resolutions",
    journal: "Springer - ICT: Applications and Social Interfaces",
    type: "Journal Research",
    year: "2026",
    status: "Published",
    doi: "10.1007/978-3-032-19684-2",
    publisherLink: "https://doi.org/10.1007/978-3-032-19684-2",
    pdfLink: "/public/Springer Paper.pdf",
  },
  {
    title: "The Evolving Paradigm of IoT: A Systematic Literature Survey of Challenges, Solutions, and Emerging Technologies",
    journal: "Wiley - Blockchain Solutions for Securing IoT Networks: Practical Applications and Case Studies",
    type: "Book Chapter",
    year: "2023",
    status: "Under Publication",
    doi: "10.1109/ICAI.2023.12345",
    publisherLink: "https://onlinelibrary.wiley.com/", // replace with actual Wiley link
    pdfLink: "/public/Springer Paper.pdf",
  },
  {
    title: "Bridging Gaps in IoT Literature: A Thematic Categorization of Challenges and Resolutions",
    journal: "ICTCS'25",
    type: "Conference Paper",
    year: "2025",
    status: "Presented",
    doi: "10.1007/978-3-032-19684-2",
    publisherLink: "https://ictcs.in/", // replace with conference page or proceedings
    pdfLink: "/public/Springer Paper.pdf",
  },
];

export function PublicationsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#003CFF]/10 to-[#4F7CFF]/10 border border-[#003CFF]/20 text-[#003CFF] text-sm font-medium">
              Publications
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Featured Research & Publications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Peer-reviewed publications in prestigious journals and conferences
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pub.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : pub.status === "Presented"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {pub.status}
                  </span>
                </div>

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-[#0F172A] group-hover:text-[#003CFF] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                        {pub.title}
                      </h3>
                    </div>

                    <div className="space-y-2 mb-6">
                      <p className="text-lg font-medium text-gray-700">
                        {pub.journal}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#003CFF]" />
                          {pub.type}
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#003CFF]" />
                          {pub.year}
                        </span>
                        {pub.doi && (
                          <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#003CFF]" />
                            DOI: {pub.doi}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {pub.doi && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#003CFF] text-[#003CFF] hover:bg-[#003CFF] hover:text-white"
                            onClick={() => window.open(pub.pdfLink, "_blank")}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            PDF
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#003CFF] text-[#003CFF] hover:bg-[#003CFF] hover:text-white"
                            onClick={() => window.open(pub.publisherLink, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View on Publisher
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
}
