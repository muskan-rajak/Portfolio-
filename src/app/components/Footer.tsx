import { motion } from "motion/react";
import { Mail, Linkedin, BookOpen, GraduationCap, Heart } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Mail, href: "mailto:muskanrajak0506@email.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muskan-rajak-387b81233/", label: "LinkedIn" },
    { icon: BookOpen, href: "https://researchgate.net", label: "ResearchGate" },
    { icon: GraduationCap, href: "https://scholar.google.com", label: "Google Scholar" },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Publications", href: "#publications" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Academic Writing", href: "#services" },
        { label: "Research Assistance", href: "#services" },
        { label: "Literature Reviews", href: "#services" },
        { label: "Content Writing", href: "#services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Research Tips", href: "#" },
        { label: "Writing Guide", href: "#" },
        { label: "Publications", href: "#publications" },
        { label: "Blog", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#003CFF]/10 to-[#4F7CFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0057FF]/10 to-[#003CFF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                Muskan Rajak
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Researcher, Academic Writer, and Content Strategist helping transform complex ideas into impactful publications and digital experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-[#003CFF] hover:to-[#4F7CFF] flex items-center justify-center border border-white/10 hover:border-transparent transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#003CFF] mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {new Date().getFullYear()} Muskan Rajak. Made with{" "}
              <Heart className="w-4 h-4 fill-red-500 text-red-500 inline animate-pulse" />{" "}
              for Research & Writing
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
