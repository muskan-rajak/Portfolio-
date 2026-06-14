import { motion } from "motion/react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Publications", href: "#publications" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#003CFF] to-[#4F7CFF] flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-[#0F172A] dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Muskan Rajak
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-[#003CFF] dark:hover:text-[#4F7CFF] font-medium transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-xl"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* CTA Button */}
            <Button
              className="hidden lg:flex bg-gradient-to-r from-[#003CFF] to-[#0057FF] hover:from-[#0057FF] hover:to-[#003CFF] text-white rounded-xl"
            >
              Let's Connect
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden rounded-xl"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-6 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-[#003CFF] dark:hover:text-[#4F7CFF] font-medium transition-colors duration-300 py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="mt-4 bg-gradient-to-r from-[#003CFF] to-[#0057FF] hover:from-[#0057FF] hover:to-[#003CFF] text-white rounded-xl w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Connect
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}