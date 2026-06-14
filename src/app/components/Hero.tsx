import { motion } from "motion/react";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#003CFF]/10 to-[#4F7CFF]/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#0057FF]/10 to-[#003CFF]/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#003CFF]/10 to-[#4F7CFF]/10 border border-[#003CFF]/20 text-[#003CFF] text-sm font-medium backdrop-blur-sm">
                Available for Research Collaboration
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="block text-[#0F172A]">Editorial Specialist.</span>
              <span className="block text-[#0F172A]">Researcher.</span>
              <span className="block bg-gradient-to-r from-[#003CFF] to-[#4F7CFF] bg-clip-text text-transparent">
                Academic Writer.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
              Experienced Editor, published researcher and academic writer specializing in content editing, literature reviews, scholarly publications, and research communication.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Muskan_Rajak_Resume.pdf"
                download
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl"
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
                className="border-2 border-[#003CFF] text-[#003CFF] hover:bg-[#003CFF] hover:text-white px-8 py-6 rounded-xl transition-all duration-300"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] rounded-3xl blur-2xl opacity-20" />
                <img
                  src="/muskan.jpg"
                  alt="Muskan Rajak"
                />
              </div>

              {/* Floating Achievement Cards */}
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
                    <p className="font-semibold text-[#0F172A]">Research Papers</p>
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0057FF] to-[#003CFF] flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Springer</p>
                    <p className="text-sm text-gray-600">Author</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F7CFF] to-[#0057FF] flex items-center justify-center text-white font-bold text-lg">
                    📚
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Academic Reviewer</p>
                    <p className="text-sm text-gray-600">& Content Specialist</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#003CFF] rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#003CFF] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
