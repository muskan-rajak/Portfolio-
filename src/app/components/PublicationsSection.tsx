
import { motion } from "motion/react";
import { FileText, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";

const publications = [
  {
    title:
      "Bridging Gaps in IoT Literature: A Thematic Categorization of Challenges and Resolutions",
    journal: "Springer - ICT: Applications and Social Interfaces",
    type: "Journal Research",
    year: "2026",
    status: "Published",
    doi: "10.1007/978-3-032-19684-2",
    publisherLink:
      "https://doi.org/10.1007/978-3-032-19684-2",
    pdfLink: "/Springer Paper.pdf",
  },
  {
    title:
      "The Evolving Paradigm of IoT: A Systematic Literature Survey of Challenges, Solutions, and Emerging Technologies",
    journal:
      "Wiley - Blockchain Solutions for Securing IoT Networks: Practical Applications and Case Studies",
    type: "Book Chapter",
    year: "2026",
    status: "Under Publication",
    doi: "",
    publisherLink: "https://onlinelibrary.wiley.com/",
    pdfLink: "/Springer Paper.pdf",
  },
  {
    title:
      "Bridging Gaps in IoT Literature: A Thematic Categorization of Challenges and Resolutions",
    journal: "ICTCS'25",
    type: "Conference Paper",
    year: "2025",
    status: "Presented",
    doi: "",
    publisherLink: "https://ictcs.in/",
    pdfLink: "/Springer Paper.pdf",
  },
];

const getStatusClasses = (status: string) => {
  switch (status) {
    case "Published":
      return "bg-green-100 text-green-700";
    case "Presented":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-yellow-100 text-yellow-700";
  }
};

export function PublicationsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#F8FAFC] to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#003CFF]/10 to-[#4F7CFF]/10 border border-[#003CFF]/20 text-[#003CFF] text-sm font-medium">
              Publications
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured Research & Publications
          </h2>

          <p
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Peer-reviewed publications in prestigious journals and conferences
          </p>
        </motion.div>

        {/* Publications */}
        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ scale: 1.01 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-5 sm:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">

                {/* Status Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(
                      pub.status
                    )}`}
                  >
                    {pub.status}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">

                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">

                    <h3
                      className="text-xl sm:text-2xl font-bold leading-tight text-[#0F172A] group-hover:text-[#003CFF] transition-colors mb-3 pr-16"
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {pub.title}
                    </h3>

                    <div className="space-y-2 mb-6">
                      <p className="text-base sm:text-lg font-medium text-gray-700">
                        {pub.journal}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">

                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#003CFF]" />
                          {pub.type}
                        </span>

                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#003CFF]" />
                          {pub.year}
                        </span>

                        {pub.doi && (
                          <span className="flex items-center gap-2 break-all">
                            <div className="w-2 h-2 rounded-full bg-[#003CFF]" />
                            DOI: {pub.doi}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">

                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full sm:w-auto border-[#003CFF] text-[#003CFF] hover:bg-[#003CFF] hover:text-white"
                        onClick={() =>
                          window.open(pub.pdfLink, "_blank")
                        }
                      >
                        <Download className="mr-2 h-4 w-4" />
                        PDF
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full sm:w-auto border-[#003CFF] text-[#003CFF] hover:bg-[#003CFF] hover:text-white"
                        onClick={() =>
                          window.open(
                            pub.publisherLink,
                            "_blank"
                          )
                        }
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View on Publisher
                      </Button>

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
