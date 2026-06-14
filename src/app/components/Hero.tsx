import { motion } from "motion/react";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50 pt-24 lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-0 lg:top-20 lg:right-20 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-[#003CFF]/10 to-[#4F7CFF]/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 lg:bottom-20 lg:left-20 w-52 h-52 lg:w-80 lg:h-80 bg-gradient-to-tr from-[#0057FF]/10 to-[#003CFF]/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-5"
            >
              <span className="inline-block px-3 py-2 sm:px-4 rounded-full bg-gradient-to-r from-[#003CFF]/10 to-[#4F7CFF]/10 border border-[#003CFF]/20 text-[#003CFF] text-xs sm:text-sm font-medium backdrop-blur-sm">
                Available for Research Collaboration
              </span>
            </motion.div>

            {/* Heading */}
            <h1
              className="font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="block text-[#0F172A] text-5xl sm:text-6xl lg:text-7xl">
                Editorial
              </span>

              <span className="block text-[#0F172A] text-5xl sm:text-6xl lg:text-7xl">
                Specialist.
              </span>

              <span className="block text-[#0F172A] text-5xl sm:text-6xl lg:text-7xl">
                Researcher.
              </span>

              <span className="block text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-[#003CFF] to-[#4F7CFF] bg-clip-text text-transparent">
                Academic Writer.
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Experienced editor, published researcher, and academic writer
              specializing in copy editing, proofreading, literature reviews, scholarly
              publications, and research communication.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/Muskan_Rajak_Resume.pdf"
                download
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/muskan-rajak-387b81233/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[#003CFF] text-[#003CFF] hover:bg-[#003CFF] hover:text-white rounded-xl"
                >
                  Let's Connect
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] rounded-3xl blur-2xl opacity-20" />

              <img
                src="/muskan.jpg"
                alt="Muskan Rajak"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating cards desktop only */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-8 -left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">
                      Research Papers
                    </p>
                    <p className="text-sm text-gray-600">Published</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute top-1/3 -right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0057FF] to-[#003CFF] flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Springer</p>
                    <p className="text-sm text-gray-600">Author</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}