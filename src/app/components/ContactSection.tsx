import { motion } from "motion/react";
import { Mail, Linkedin, GraduationCap } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "Email Me",
    href: "mailto:muskanrajak0506@gmail.com",
    color: "from-[#003CFF] to-[#0057FF]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/muskan-rajak-387b81233/",
    color: "from-[#0057FF] to-[#4F7CFF]",
  },
  {
    icon: GraduationCap,
    label: "Google Scholar",
    value: "View Profile",
    href: "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=ACrTK9U0blehwZV4QHUaIgIdm9OxxcWzMpzxP8KoWZBtwD1lwiFi_1W1dkv1zo_khT-b41VcxMGLzVTsE0cIEtuhnuzl&user=jqgo-k0AAAAJ",
    color: "from-[#003CFF] to-[#4F7CFF]",
  },
];

export function ContactSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0F172A] to-[#1e293b] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#003CFF]/20 to-[#4F7CFF]/20 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0057FF]/20 to-[#003CFF]/20 rounded-full blur-3xl"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
      
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-[#003CFF] via-[#0057FF] to-[#4F7CFF] bg-clip-text text-transparent">
              Meaningful Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Whether you need editing done, research assistance, academic writing, or content strategy,
            I'm here to help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Connect With Me
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden"
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-400 mb-1">
                        {method.label}
                      </p>

                      <p className="text-base sm:text-lg font-semibold text-white break-all">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <h4 className="font-semibold text-lg mb-3">Response Time</h4>
              <p className="text-gray-300 mb-4">
                I typically respond to all inquiries within 24-48 hours. For urgent requests,
                please mention it in your message.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for new projects
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let's Start a Conversation
            </h3>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're looking for research assistance, academic editing,
              content development, publication support, or collaboration
              opportunities, I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:muskanrajak0506@gmail.com"
                className="w-full inline-flex items-center justify-center bg-[#003CFF] hover:bg-[#0057FF] text-white h-14 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me Directly
              </a>

              <a
                href="https://www.linkedin.com/in/muskan-rajak-387b81233/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center border border-white/20 hover:bg-white/10 text-white h-14 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>

            <div className="mt-8 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <h4 className="font-semibold text-lg mb-3">
                Available For
              </h4>

              <ul className="space-y-2 text-gray-300">
                <li>• Research Collaboration</li>
                <li>• Academic Writing & Editing</li>
                <li>• Literature Reviews</li>
                <li>• Research Assistance</li>
                <li>• Content Strategy</li>
              </ul>
            </div>
           </motion.div>
        </div>

      </div> {/* container */}

    </section>
  );
}

